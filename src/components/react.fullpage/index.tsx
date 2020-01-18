import React from 'react'
import { isEqual } from 'lodash'

import {
  MAIN_SELECTOR,
  ID_SELECTOR,
  DEFAULT_SECTION,
  DEFAULT_SLIDE,
} from '../selectors';
import { ReactFullpageOwnProps } from './fullpage.interface';

let Fullpage = require('fullpage.js/dist/fullpage.extensions.min');

const fullpageCallbacks = [
  'afterLoad',
  'afterRender',
  'afterResize',
  'afterResponsive',
  'afterSlideLoad',
  'onLeave',
  'onSlideLeave',
];

export class ReactFullpage extends React.Component<any, any> {
  static Wrapper: any = {}
  
  fullpageApi: any
  fpUtils: any
  fpEasings: any

  constructor(props: any) {
    super(props);
    const { render, pluginWrapper } = this.props;

    this.importVendors();

    if (pluginWrapper) {
      pluginWrapper();
    }

    Fullpage = require('fullpage.js/dist/fullpage.extensions.min');

    this.state = {
      initialized: false,
      sectionCount: 0,
      slideCount: 0,
    };
  }

  componentDidMount() {
    const opts = this.buildOptions();

    if (Fullpage) {
      this.init(opts);
      this.markInitialized();
    }
  }

  componentDidUpdate(prevProps: any) {
    const newSectionCount = this.getSectionCount();
    const newSlideCount = this.getSlideCount();
    const { sectionCount, slideCount } = this.state;

    // comparing sectionColors array option
    const areSameSectionColors = isEqual(prevProps.sectionsColor, this.props.sectionsColor);

    // NOTE: if fullpage props have changed we need to rebuild
    if (!areSameSectionColors) {
      this.reRender();
      return;
    }

    if (sectionCount === newSectionCount && slideCount === newSlideCount) {
      return;
    }

    this.reRender();
  }

  componentWillUnmount() {
    this.destroy();
  }

  getSectionCount = () => {
    const { sectionSelector = DEFAULT_SECTION } = this.props;
    const { length } = document.querySelectorAll(sectionSelector);
    return length;
  }

  getSlideCount = () => {
    const { slideSelector = DEFAULT_SLIDE } = this.props;
    const { length } = document.querySelectorAll(slideSelector);
    return length;
  }

  importVendors = () => {
    const { scrollOverflow, easing } = this.props;
    if (scrollOverflow) {
      require('fullpage.js/vendors/scrolloverflow.min');
    }
    if (easing) {
      require('fullpage.js/vendors/easings.min');
    }
  }

  init = (opts: any) => {
    new Fullpage(ID_SELECTOR, opts);
    //@ts-ignore
    this.fullpageApi = window.fullpage_api;
    //@ts-ignore
    this.fpUtils = window.fp_utils;
    //@ts-ignore
    this.fpEasings = window.fp_easings;
  }

  destroy = () => {
    this.fullpageApi.destroy('all');
  }

  reRender = () => {
    this.destroy();
    this.init(this.buildOptions());
  }

  markInitialized = () => {
    this.setState({
      initialized: true,
      sectionCount: this.getSectionCount(),
      slideCount: this.getSlideCount(),
    });
  }

  buildOptions = () => {
    const filterCb = (key: string) => !!Object.keys(this.props).find(cb => cb === key);
    const registered = fullpageCallbacks.filter(filterCb);
    const listeners = registered.reduce((result, key) => {
      return {
        ...result,
        [key]: (...args: any) => {
          //@ts-ignore
          return this.update(...[key, ...args]);
        },
      };
    }, {});

    // NOTE: override passed in callbacks w/  wrapped listeners
    const options = {
      ...this.props,
      ...listeners,
    };

    return options;
  }

  update = (lastEvent: any, ...args: any) => {
    let state = {
      ...this.state,
      sectionCount: this.getSectionCount(),
      slideCount: this.getSlideCount(),
    };

    const makeState = (callbackParameters: any) => ({
      ...state,
      ...callbackParameters,
      lastEvent,
    });

    const fromArgs = (argList: any) =>
      argList.reduce((result: any, key: any, i: any) => {
        const value = args[i];
        result[key] = value
        return result;
      }, {});

    switch (lastEvent) {
      // After-*
      case 'afterLoad':
        state = makeState(fromArgs(['origin', 'destination', 'direction']));
        break;

      case 'afterResize':
        state = makeState(fromArgs(['']));
        break;

      case 'afterResponsive':
        state = makeState(fromArgs(['isResponsive']));
        break;

      case 'afterSlideLoad':
        state = makeState(
          fromArgs(['section', 'origin', 'destination', 'direction'])
        );
        break;

      // On-*
      case 'onLeave':
        state = makeState(fromArgs(['origin', 'destination', 'direction']));
        break;

      case 'onSlideLeave':
        state = makeState(
          fromArgs([
            'section',
            'origin',
            'slideIndex',
            'destination',
            'direction',
          ])
        );
        break;

      default:
        break;
    }

    const returned = this.props[lastEvent](...args);
    this.setState(state);
    return returned;
  }

  render() {
    return (
      <div id={ MAIN_SELECTOR }> { this.props.render(this) } </div>
    )
  }
}

