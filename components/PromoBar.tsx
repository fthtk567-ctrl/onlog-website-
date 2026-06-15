import { customerWebUrl } from '@/lib/appLinks'

export default function PromoBar() {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3">
      <div className="container mx-auto px-4 text-center">
        <a
          href={customerWebUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base font-medium hover:underline"
        >
          On&apos;la Gelsin yemek siparişi artık webde. Restoranları keşfedin, siparişinizi hemen verin.
        </a>
      </div>
    </div>
  )
}
