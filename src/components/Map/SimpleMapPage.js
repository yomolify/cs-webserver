import React, {PropTypes, Component} from 'react/addons';
import { canUseDOM } from 'react/lib/ExecutionEnvironment';
import controllable from 'react-controllables';
import shouldPureComponentUpdate from 'react-pure-render/function';



import {List} from 'immutable';

const K_MARGIN_TOP = 30;
const K_MARGIN_RIGHT = 30;
const K_MARGIN_BOTTOM = 30;
const K_MARGIN_LEFT = 30;

const K_HOVER_DISTANCE = 30;

@controllable(['center', 'zoom', 'markers'])
export default class SimpleMapPage extends Component {
  static propTypes = {
    onCenterChange: PropTypes.func, // @controllable generated fn
    onZoomChange: PropTypes.func, // @controllable generated fn
    onBoundsChange: PropTypes.func,
    onMarkerHover: PropTypes.func,
    onChildClick: PropTypes.func,
    center: PropTypes.any,
    zoom: PropTypes.number,
    markers: PropTypes.any,
    visibleRowFirst: PropTypes.number,
    visibleRowLast: PropTypes.number,
    maxVisibleRows: PropTypes.number,
    hoveredRowIndex: PropTypes.number,
    openBallonIndex: PropTypes.number
  }

  static defaultProps = {
    center: new List([49.262513, -123.242188]),
    zoom: 10,
    visibleRowFirst: -1,
    visibleRowLast: -1,
    hoveredRowIndex: -1,
    apiKey: "AIzaSyDH8q0leo3eqNenuB5o2cL_m7G7D4o5N5M"
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  _onBoundsChange = (center, zoom, bounds, marginBounds) => {
    if (this.props.onBoundsChange) {
      this.props.onBoundsChange({center, zoom, bounds, marginBounds});
    } else {
      this.props.onCenterChange(center);
      this.props.onZoomChange(zoom);
    }
  }

  _onChildClick = (key, childProps) => {
    const markerId = childProps.marker.get('id');
    const index = this.props.markers.findIndex(m => m.get('id') === markerId);
    if (this.props.onChildClick) {
      this.props.onChildClick(index);
    }
  }

  _onChildMouseEnter = (key, childProps) => {
    const markerId = childProps.marker.get('id');
    const index = this.props.markers.findIndex(m => m.get('id') === markerId);
    if (this.props.onMarkerHover) {
      this.props.onMarkerHover(index);
    }
  }

  _onChildMouseLeave = (/* key, childProps */) => {
    if (this.props.onMarkerHover) {
      this.props.onMarkerHover(-1); 
    }
  }

  _onBalloonCloseClick = () => {
    if (this.props.onChildClick) {
      this.props.onChildClick(-1);
    }
  }


  render() {
      const GoogleMap = require('google-map-react');
      return (
        <div style={{width:"100%", height:"1500px"}}>
          <GoogleMap
            apiKey={this.props.apiKey}
            center={this.props.center.toJS()}
            zoom={this.props.zoom}
            margin={[K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT]}
            >
          </GoogleMap>
        </div>
        );
  }
}