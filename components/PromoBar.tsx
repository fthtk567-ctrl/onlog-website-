export default function PromoBar() {
  const googlePlayUrl = 'https://play.google.com/store/apps/details?id=com.teketech.onlagelsin&hl=tr'

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3">
      <div className="container mx-auto px-4 text-center">
        <a
          href={googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base font-medium hover:underline"
        >
          On&apos;la Gelsin Google Play&apos;de yayında. Yerli yemek sipariş deneyimini hemen indirin.
        </a>
      </div>
    </div>
  )
}
