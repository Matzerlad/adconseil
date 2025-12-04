interface PropertyCardProps {
  url: string;
  title: string;
  description: string;
  image: string;
}

const PropertyCard = ({ url, title, description, image }: PropertyCardProps) => {
  return (
    <div className="max-w-[700px] mx-auto border border-border rounded-xl overflow-hidden flex gap-4 items-stretch bg-card shadow-md font-sans">
      <div 
        className="flex-shrink-0 w-[40%] min-w-[150px] h-40 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="m-0 mb-2 text-lg leading-tight text-foreground font-semibold">
            {title}
          </h3>
          <p className="m-0 mb-3 text-muted-foreground text-sm">
            {description}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-lg no-underline font-semibold bg-primary text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            Voir l&apos;annonce
          </a>
          <a
            href="mailto:contact@ad-investissement.fr?subject=Info%20annonce"
            className="px-4 py-2.5 rounded-lg no-underline font-semibold bg-transparent text-foreground border border-border hover:bg-muted transition-colors"
          >
            Contacter
          </a>
        </div>
      </div>
    </div>
  );
};

const SeLogerEmbed = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
          Notre annonce en vedette
        </h2>
        <PropertyCard
          url="https://plus.myselogerpro.com/dashboard#/ads/detail/255329027?redirectToFront=annonce%2Fportefeuille&m=wallet-redirection-classified_detail"
          title="Titre de l'annonce"
          description="Petite description — ex : 3 pièces, 70m², Paris"
          image="https://via.placeholder.com/600x400?text=Image+Annonce"
        />
      </div>
    </section>
  );
};

export default SeLogerEmbed;
