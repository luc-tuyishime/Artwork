import store from '../../app/store'

describe('Redux store', () => {
  it('should test the application store with intial state', () => {
    const expectedInitialState = {
      ArtApi: expect.any(Object),
      Art: expect.any(Object),
    }
    expect(store.getState()).toEqual(expectedInitialState)
  })
})
