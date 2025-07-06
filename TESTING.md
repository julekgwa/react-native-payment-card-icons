# Testing Guide

This project uses Jest and React Native Testing Library for comprehensive testing of payment card icon components.

## Test Setup

### Dependencies

The following testing dependencies are installed:

- `jest` - Testing framework (already configured with React Native preset)
- `@testing-library/react-native` - React Native testing utilities
- `react-test-renderer` - React component renderer for testing

### Configuration

Testing is configured in `package.json`:

```json
{
  "jest": {
    "preset": "react-native",
    "modulePathIgnorePatterns": [
      "<rootDir>/example/node_modules",
      "<rootDir>/lib/"
    ],
    "setupFilesAfterEnv": ["<rootDir>/jest.setup.js"],
    "testMatch": [
      "**/__tests__/**/*.(test|spec).(js|jsx|ts|tsx)",
      "**/?(*.)(test|spec).(js|jsx|ts|tsx)"
    ],
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts",
      "!src/icons/index.ts"
    ]
  }
}
```

### Jest Setup

The `jest.setup.js` file handles:

- Mocking `react-native-svg` components for testing
- Setting up test environment globals
- Console warning management during tests

## Running Tests

### Basic Commands

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test --watch

# Run tests with coverage report
yarn test --coverage

# Update snapshots
yarn test -u
```

### Test Scripts

Add these scripts to your workflow:

```bash
# Type checking
yarn typecheck

# Linting
yarn lint

# Combined testing (add to package.json)
yarn test:all  # runs typecheck, lint, and test
```

## Test Structure

### Test Files

The project includes four main test suites:

1. **`src/__tests__/index.test.tsx`** - Main library exports and integration tests
2. **`src/__tests__/PaymentIcon.test.tsx`** - PaymentIcon component functionality
3. **`src/__tests__/icons.test.tsx`** - Individual icon component tests
4. **`src/__tests__/utils.test.tsx`** - Utility functions and edge cases

### Test Categories

#### Integration Tests
- Library exports validation
- Component rendering with different props
- Type and variant combinations

#### Unit Tests
- Individual icon component rendering
- SVG prop passing
- Error handling

#### Utility Tests
- Component name generation
- Props handling
- Edge case management

## Writing New Tests

### Adding Icon Tests

When adding new icon components:

```tsx
import YourNewIcon from '../icons/YourNewIcon';

describe('YourNewIcon', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(<YourNewIcon />);
    expect(toJSON()).toBeTruthy();
  });

  it('accepts custom props', () => {
    const { getByTestId } = render(
      <YourNewIcon width={48} height={48} testID="your-icon" />
    );
    const icon = getByTestId('your-icon');
    expect(icon).toBeTruthy();
  });
});
```

### Testing PaymentIcon with New Types

```tsx
it('handles new payment type', () => {
  const { toJSON } = render(<PaymentIcon type="your-new-type" />);
  expect(toJSON()).toBeTruthy();
});
```

### Best Practices

1. **Use descriptive test names** that explain what is being tested
2. **Test both success and failure cases**
3. **Mock external dependencies** (like react-native-svg)
4. **Use data-driven tests** for similar test cases with different inputs
5. **Clean up side effects** (spies, mocks) in test teardown

## Coverage Goals

Current coverage focuses on:

- ✅ **PaymentIcon component**: 100% coverage
- ✅ **Core functionality**: Component rendering and prop handling
- ✅ **Error handling**: Invalid inputs and edge cases
- ⚠️ **Individual icons**: Partial coverage (many icons not explicitly tested)

### Improving Coverage

To increase coverage of individual icon components:

```tsx
// Test more icon variants
const iconVariants = [
  'AlipayFlat', 'AlipayLogo', 'AlipayMono',
  'VisaFlat', 'VisaLogo', 'VisaMono',
  // ... add more as needed
];

iconVariants.forEach(iconName => {
  const IconComponent = Icons[iconName];
  if (IconComponent) {
    it(`renders ${iconName} correctly`, () => {
      const { toJSON } = render(<IconComponent />);
      expect(toJSON()).toBeTruthy();
    });
  }
});
```

## Troubleshooting

### Common Issues

1. **SVG Component Errors**
   - Ensure all SVG components are properly mocked in `jest.setup.js`
   - Add new SVG elements to the mock if tests fail

2. **React Test Renderer Version Mismatch**
   - Keep `react-test-renderer` version aligned with React version
   - Currently using React 19.0.0, so react-test-renderer should be 19.0.0

3. **Console Warnings in Tests**
   - Console warnings are mocked by default in setup
   - Use `jest.spyOn(console, 'warn')` when testing warning behavior

### Performance Tips

1. **Use `--maxWorkers=50%`** for faster test runs on multi-core systems
2. **Run specific test files** during development: `yarn test PaymentIcon.test.tsx`
3. **Use `--watchAll=false`** to watch only changed files

## Continuous Integration

For CI/CD pipelines, use:

```bash
# CI test command
yarn test --coverage --watchAll=false --passWithNoTests

# With coverage thresholds (add to jest config)
"coverageThreshold": {
  "global": {
    "branches": 80,
    "functions": 80,
    "lines": 80,
    "statements": 80
  }
}
```

## Contributing

When contributing:

1. **Write tests** for new features
2. **Update existing tests** when modifying components
3. **Maintain coverage** above current levels
4. **Follow naming conventions** for test files and descriptions
5. **Document complex test scenarios** in comments
