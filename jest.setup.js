/* global jest */

import '@testing-library/react-native';

// Mock react-native-svg components
jest.mock('react-native-svg', () => {
  const MockSvg = 'Svg';
  const MockPath = 'Path';
  const MockEllipse = 'Ellipse';
  const MockCircle = 'Circle';
  const MockRect = 'Rect';
  const MockG = 'G';
  const MockDefs = 'Defs';
  const MockLinearGradient = 'LinearGradient';
  const MockStop = 'Stop';
  const MockClipPath = 'ClipPath';
  const MockMask = 'Mask';
  const MockPolygon = 'Polygon';
  const MockLine = 'Line';
  const MockText = 'Text';
  const MockTSpan = 'TSpan';
  const MockUse = 'Use';

  return {
    __esModule: true,
    default: MockSvg,
    Svg: MockSvg,
    Path: MockPath,
    Ellipse: MockEllipse,
    Circle: MockCircle,
    Rect: MockRect,
    G: MockG,
    Defs: MockDefs,
    LinearGradient: MockLinearGradient,
    Stop: MockStop,
    ClipPath: MockClipPath,
    Mask: MockMask,
    Polygon: MockPolygon,
    Line: MockLine,
    Text: MockText,
    TSpan: MockTSpan,
    Use: MockUse,
  };
});

// Silence console warnings during tests unless explicitly testing them
const originalConsoleWarn = console.warn;
global.beforeEach(() => {
  console.warn = jest.fn();
});

global.afterEach(() => {
  console.warn = originalConsoleWarn;
});
