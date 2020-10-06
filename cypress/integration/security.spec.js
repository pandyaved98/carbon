/* global cy */
import { editorVisible } from '../support'

describe('security', () => {
  it('should not alert from bg query parameter', () => {
    const stub = cy.stub()
    cy.on('window:alert', stub)

    // https://github.com/carbon-app/carbon/issues/192
    cy.visit(`?bg=rgba(171, 184, 195, 1)</style><img src="" onerror="alert('xss')" /><!--`)

    editorVisible()

    expect(stub).not.to.be.called
  })
  it('security headers', () => {
    cy.request('/').should(response => {
      expect(response.headers).to.include({
        'x-frame-options': 'SAMEORIGIN',
        'x-xss-protection': '1; mode=block',
        'x-content-type-options': 'nosniff',
        'referrer-policy': 'no-referrer-when-downgrade',
        'feature-policy': "geolocation 'self'; microphone 'self'; camera 'self'",
      })
    })
  })
})
