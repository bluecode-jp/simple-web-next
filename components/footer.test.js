import { render, screen } from '@testing-library/react'
import Footer from './footer'

describe('Footer', () => {
    it('フッター要素がレンダリングされる', () => {
        render(<Footer />)
        expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    })

    it('"footer" というテキストが表示される', () => {
        render(<Footer />)
        expect(screen.getByText('footer')).toBeInTheDocument()
    })
})