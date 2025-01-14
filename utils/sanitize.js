import {JSDOM} from 'jsdom'
import DOMPurify from 'dompurify'

const window = new JSDOM('').window
const purify = DOMPurify(window)

const sanitizeDataRequest = (data) => {
  if (typeof data === 'string') {
    return purify.sanitize(data)
  }
  if (typeof data === 'object' && data !== null) {
    Object.keys(data).forEach(
      (key) => (data[key] = sanitizeDataRequest(data[key])),
    )
  }
  return data
}

export default sanitizeDataRequest
