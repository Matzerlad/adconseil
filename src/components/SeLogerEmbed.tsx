const SeLogerEmbed = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Notre annonce en vedette
        </h2>
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative overflow-hidden border border-border rounded-lg"
            style={{ paddingTop: '56.25%' }}
          >
            <iframe
              src="https://plus.myselogerpro.com/dashboard#/ads/detail/255329027?redirectToFront=annonce%2Fportefeuille&m=wallet-redirection-classified_detail"
              className="absolute top-0 left-0 w-full h-full border-0"
              loading="lazy"
              title="Annonce SeLoger Pro - 255329027"
              sandbox="allow-forms allow-same-origin allow-scripts allow-popups"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeLogerEmbed;
