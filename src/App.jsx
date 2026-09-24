import Hero from './components/Hero' // Módulo 1
import ProductDetails from './components/ProductDetails' // Módulo 2
import ReviewsSummary from './components/ReviewsSummary' // Módulo 3
import ProductComparison from './components/ProductComparison' // Módulo 4
import AdditionalProducts from './components/AdditionalProducts' // Módulo 5
import SustainabilitySection from './components/SustainabilitySection' // Módulo 6
import EcoLineProducts from './components/EcoLineProducts' // Módulo 7
// eslint-disable-next-line no-unused-vars -- barra oculta temporariamente (ver render)
import StickyBuyBar from './components/StickyBuyBar' // Barra de compra fixa

function App() {
  return (
    // Celular (até 479px): tela cheia com scroll nativo da página.
    // Telas maiores: moldura de exatamente 393x852px, centralizada, com scroll só dentro dela.
    <div className="min-h-screen bg-[#000000] min-[480px]:bg-zinc-900 min-[480px]:flex min-[480px]:items-center min-[480px]:justify-center min-[480px]:p-4">
      <div className="relative w-full max-w-[440px] mx-auto min-[480px]:w-[393px] min-[480px]:h-[852px] min-[480px]:max-h-[852px] min-[480px]:shrink-0 min-[480px]:overflow-hidden min-[480px]:shadow-2xl">
        <main
          data-scroll-root
          className="w-full min-[480px]:h-full min-[480px]:overflow-y-auto min-[480px]:overflow-x-hidden min-[480px]:no-scrollbar"
        >
          {/* Módulo 1: Hero */}
          <Hero />
          {/* Módulo 2: ProductDetails */}
          <ProductDetails />
          {/* Módulo 3: ReviewsSummary */}
          <ReviewsSummary />
          {/* Módulo 4: ProductComparison */}
          <ProductComparison />
          {/* Módulo 5: AdditionalProducts */}
          <AdditionalProducts />
          {/* Módulo 6: SustainabilitySection */}
          <SustainabilitySection />
          {/* Módulo 7: EcoLineProducts */}
          <EcoLineProducts />
          {/* Respiro final para a barra de compra fixa — desativado junto com ela (ver abaixo) */}
          {/* <div aria-hidden className="h-[96px] bg-[#F8F6F1]" /> */}
        </main>

        {/* Barra de compra fixa — OCULTA TEMPORARIAMENTE. Para reativar, descomente a linha abaixo
            e o respiro final acima. */}
        {/* <StickyBuyBar /> */}
      </div>
    </div>
  )
}

export default App
