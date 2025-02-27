import { setConfig } from 'src/config'
import { setDebugEnabled } from 'src/logDebug'
import initFirebaseClientSDK from 'src/initFirebaseClientSDK'
import isClientSide from 'src/isClientSide'

jest.mock('src/config')
jest.mock('src/logDebug')
jest.mock('src/initFirebaseClientSDK')
jest.mock('src/isClientSide')

const mockIsClientSide = jest.mocked(isClientSide)

beforeEach(() => {
  mockIsClientSide.mockReturnValue(true)
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('index.ts: init', () => {
  it('exports init', () => {
    expect.assertions(2)
    const index = require('src/index')
    expect(index.init).toBeDefined()
    expect(index.init).toEqual(expect.any(Function))
  })

  it('calls setDebugEnabled with true if config.debug is true', () => {
    expect.assertions(1)
    const index = require('src/index')
    index.init({ debug: true })
    expect(setDebugEnabled).toHaveBeenCalledWith(true)
  })

  it('calls setDebugEnabled with false if config.debug is truthy but non-true', () => {
    expect.assertions(1)
    const index = require('src/index')
    index.init({ debug: 'yes' })
    expect(setDebugEnabled).toHaveBeenCalledWith(false)
  })

  it('calls setDebugEnabled with false if config.debug is false', () => {
    expect.assertions(1)
    const index = require('src/index')
    index.init({ debug: false })
    expect(setDebugEnabled).toHaveBeenCalledWith(false)
  })

  it('calls setConfig with the provided config', () => {
    expect.assertions(1)
    const index = require('src/index')
    index.init({ some: 'config' })
    expect(setConfig).toHaveBeenCalledWith({ some: 'config' })
  })

  it('calls initFirebaseClientSDK if on the client side', () => {
    expect.assertions(1)
    mockIsClientSide.mockReturnValue(true)
    const index = require('src/index')
    index.init()
    expect(initFirebaseClientSDK).toHaveBeenCalled()
  })

  it('does not call initFirebaseClientSDK if on the server side', () => {
    expect.assertions(1)
    mockIsClientSide.mockReturnValue(false)
    const index = require('src/index')
    index.init()
    expect(initFirebaseClientSDK).not.toHaveBeenCalled()
  })
})

describe('index.ts: withAuthUser', () => {
  it('exports withAuthUser', () => {
    expect.assertions(2)
    const index = require('src/index')
    expect(index.withAuthUser).toBeDefined()
    expect(index.withAuthUser).toEqual(expect.any(Function))
  })
})

describe('index.ts: useAuthUser', () => {
  it('exports useAuthUser', () => {
    expect.assertions(2)
    const index = require('src/index')
    expect(index.useAuthUser).toBeDefined()
    expect(index.useAuthUser).toEqual(expect.any(Function))
  })
})

describe('index.ts: withAuthUserSSR', () => {
  it('exports withAuthUserSSR', () => {
    expect.assertions(2)
    const index = require('src/index')
    expect(index.withAuthUserSSR).toBeDefined()
    expect(index.withAuthUserSSR).toEqual(expect.any(Function))
  })

  it('throws if called on the client side', () => {
    expect.assertions(1)
    mockIsClientSide.mockReturnValue(true)
    const index = require('src/index')
    expect(() => {
      index.withAuthUserSSR()
    }).toThrow('"withAuthUserSSR" can only be called server-side.')
  })
})

describe('index.ts: withAuthUserTokenSSR', () => {
  it('exports withAuthUserTokenSSR', () => {
    expect.assertions(2)
    const index = require('src/index')
    expect(index.withAuthUserTokenSSR).toBeDefined()
    expect(index.withAuthUserTokenSSR).toEqual(expect.any(Function))
  })

  it('throws if called on the client side', () => {
    expect.assertions(1)
    mockIsClientSide.mockReturnValue(true)
    const index = require('src/index')
    expect(() => {
      index.withAuthUserTokenSSR()
    }).toThrow('"withAuthUserTokenSSR" can only be called server-side.')
  })
})

describe('index.ts: setAuthCookies', () => {
  it('exports setAuthCookies', () => {
    expect.assertions(2)
    const index = require('src/index')
    expect(index.setAuthCookies).toBeDefined()
    expect(index.setAuthCookies).toEqual(expect.any(Function))
  })

  it('throws if called on the client side', () => {
    expect.assertions(1)
    mockIsClientSide.mockReturnValue(true)
    const index = require('src/index')
    expect(() => {
      index.setAuthCookies()
    }).toThrow('"setAuthCookies" can only be called server-side.')
  })
})

describe('index.ts: unsetAuthCookies', () => {
  it('exports unsetAuthCookies', () => {
    expect.assertions(2)
    const index = require('src/index')
    expect(index.unsetAuthCookies).toBeDefined()
    expect(index.unsetAuthCookies).toEqual(expect.any(Function))
  })

  it('throws if called on the client side', () => {
    expect.assertions(1)
    mockIsClientSide.mockReturnValue(true)
    const index = require('src/index')
    expect(() => {
      index.unsetAuthCookies()
    }).toThrow('"unsetAuthCookies" can only be called server-side.')
  })
})

describe('index.ts: verifyIdToken', () => {
  it('exports verifyIdToken', () => {
    expect.assertions(2)
    const index = require('src/index')
    expect(index.verifyIdToken).toBeDefined()
    expect(index.verifyIdToken).toEqual(expect.any(Function))
  })

  it('throws if called on the client side', () => {
    expect.assertions(1)
    mockIsClientSide.mockReturnValue(true)
    const index = require('src/index')
    expect(() => {
      index.verifyIdToken()
    }).toThrow('"verifyIdToken" can only be called server-side.')
  })
})

describe('index.ts: AuthAction', () => {
  it('defines the expected constants', () => {
    expect.assertions(1)
    const index = require('src/index')
    expect(index.AuthAction).toEqual({
      RENDER: 'render',
      SHOW_LOADER: 'showLoader',
      RETURN_NULL: 'returnNull',
      REDIRECT_TO_LOGIN: 'redirectToLogin',
      REDIRECT_TO_APP: 'redirectToApp',
    })
  })
})

describe('index.ts: getUserFromCookies', () => {
  it('exports getUserFromCookies', () => {
    expect.assertions(2)
    const index = require('src/index')
    expect(index.getUserFromCookies).toBeDefined()
    expect(index.getUserFromCookies).toEqual(expect.any(Function))
  })

  it('throws if called on the client side', () => {
    expect.assertions(1)
    mockIsClientSide.mockReturnValue(true)
    const index = require('src/index')
    expect(() => {
      index.getUserFromCookies()
    }).toThrow('"getUserFromCookies" can only be called server-side.')
  })
})
