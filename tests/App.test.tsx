import { expect, test } from 'vitest'

import App from '../src/App'
import { render } from 'vitest-browser-react'

test('renders App', async () => {
  const { getByText, getByRole } = render(<App/>)

  await expect.element(getByText('Vite + React')).toBeInTheDocument()
  await getByRole('button', { name: 'count is 0'}).click()
  await expect.element(getByText('count is 1')).toBeInTheDocument()

})