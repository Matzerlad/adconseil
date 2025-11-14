import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-playfair font-semibold mb-4">Mentions légales</h1>
            <p className="text-muted-foreground">
              Informations légales et réglementaires d'AD Investissement Conseil
            </p>
          </div>

          <div className="space-y-8">
            {/* Identification */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-playfair font-semibold mb-4">Identification de la société</h2>
              <div className="space-y-2 text-sm">
                <p><strong>Raison sociale :</strong> AD INVESTISSEMENT CONSEIL</p>
                <p><strong>Forme juridique :</strong> [À compléter]</p>
                <p><strong>Capital social :</strong> [À compléter]</p>
                <p><strong>Siège social :</strong> 14 Rue des Poissonniers, 92200 Neuilly-sur-Seine</p>
                <p><strong>SIRET :</strong> [À compléter]</p>
                <p><strong>RCS :</strong> [À compléter]</p>
                <p><strong>Téléphone :</strong> 01 46 37 47 57</p>
                <p><strong>Email :</strong> doria@adconseil.fr</p>
                <p><strong>Dirigeant :</strong> Arnaud Doria</p>
              </div>
            </section>

            {/* Habilitations professionnelles */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-playfair font-semibold mb-4">Habilitations professionnelles</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Inscription ORIAS</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    AD Investissement Conseil est inscrit au registre unique des intermédiaires en assurance, banque et finance (ORIAS).
                  </p>
                  <p className="text-sm"><strong>Numéro ORIAS :</strong> 8044290</p>
                  <p className="text-sm">
                    <a 
                      href="https://www.orias.fr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Vérifier l'inscription sur www.orias.fr
                    </a>
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="text-lg font-semibold mb-2">Statuts réglementés</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-accent mt-1.5 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Conseiller en Investissements Financiers (CIF)</strong>
                        <p className="text-muted-foreground">Numéro d'immatriculation : A298000</p>
                        <p className="text-muted-foreground">
                          En tant que CIF, AD Investissement Conseil est autorisé à conseiller ses clients sur les placements financiers.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-accent mt-1.5 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Courtier en assurance (COA)</strong>
                        <p className="text-muted-foreground">
                          Habilité à présenter, proposer ou aider à conclure des contrats d'assurance et de réassurance.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-accent mt-1.5 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Courtier en opérations de banque et en services de paiement (COBSP)</strong>
                        <p className="text-muted-foreground">
                          Autorisé à présenter, proposer ou aider à la réalisation d'opérations de banque et de services de paiement.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="text-lg font-semibold mb-2">Activités immobilières</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-accent mt-1.5 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Carte de transaction sur immeubles et fonds de commerce</strong>
                        <p className="text-muted-foreground">Numéro de carte professionnelle : T 1700</p>
                        <p className="text-muted-foreground">Délivrée par : Préfecture de Nanterre</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-accent mt-1.5 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Carte de gestion immobilière</strong>
                        <p className="text-muted-foreground">Numéro : T 1700</p>
                        <p className="text-muted-foreground">Délivrée par : Préfecture de Nanterre</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Garanties et assurances */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-playfair font-semibold mb-4">Garanties et assurances professionnelles</h2>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Responsabilité Civile Professionnelle</h3>
                  <p className="text-muted-foreground mb-1">
                    AD Investissement Conseil est couvert par une assurance de responsabilité civile professionnelle conforme aux dispositions légales.
                  </p>
                  <p><strong>Assureur :</strong> [À compléter]</p>
                  <p><strong>Couverture géographique :</strong> France et Union Européenne</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="text-lg font-semibold mb-2">Garantie financière</h3>
                  <p className="text-muted-foreground mb-1">
                    Conformément à la réglementation, AD Investissement Conseil dispose d'une garantie financière.
                  </p>
                  <p><strong>Organisme garant :</strong> [À compléter]</p>
                  <p><strong>Montant de la garantie :</strong> [À compléter]</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="text-lg font-semibold mb-2">Garantie financière immobilière</h3>
                  <p className="text-muted-foreground mb-1">
                    Pour l'activité de transaction immobilière, une garantie financière spécifique est en place.
                  </p>
                  <p><strong>Organisme garant :</strong> [À compléter]</p>
                  <p><strong>Adresse :</strong> [À compléter]</p>
                </div>
              </div>
            </section>

            {/* Autorités de contrôle */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-playfair font-semibold mb-4">Autorités de contrôle et de tutelle</h2>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold">Autorité de Contrôle Prudentiel et de Résolution (ACPR)</h3>
                  <p className="text-muted-foreground">4 place de Budapest, CS 92459, 75436 Paris Cedex 09</p>
                  <a href="https://acpr.banque-france.fr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    www.acpr.banque-france.fr
                  </a>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold">Autorité des Marchés Financiers (AMF)</h3>
                  <p className="text-muted-foreground">17 place de la Bourse, 75082 Paris Cedex 02</p>
                  <a href="https://www.amf-france.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    www.amf-france.org
                  </a>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold">Chambre des Indépendants du Patrimoine (CIP)</h3>
                  <p className="text-muted-foreground">Association professionnelle agréée par l'AMF</p>
                  <a href="https://www.cip-patrimoine.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    www.cip-patrimoine.com
                  </a>
                </div>
              </div>
            </section>

            {/* Médiation */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-playfair font-semibold mb-4">Médiation et réclamations</h2>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Traitement des réclamations</h3>
                  <p className="text-muted-foreground mb-2">
                    En cas de réclamation, vous pouvez contacter AD Investissement Conseil par courrier à l'adresse du siège social ou par email à l'adresse suivante :
                  </p>
                  <p><strong>Email :</strong> doria@adconseil.fr</p>
                  <p className="text-muted-foreground mt-2">
                    Un accusé de réception vous sera adressé sous 10 jours ouvrables. Une réponse définitive vous sera apportée dans un délai maximum de deux mois.
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="text-lg font-semibold mb-2">Médiation de la consommation</h3>
                  <p className="text-muted-foreground mb-2">
                    En cas de litige non résolu, vous pouvez saisir le médiateur de la consommation compétent :
                  </p>
                  <p><strong>Médiateur :</strong> [À compléter selon l'activité]</p>
                  <p className="text-muted-foreground">
                    La médiation est un processus gratuit et confidentiel de résolution amiable des litiges.
                  </p>
                </div>
              </div>
            </section>

            {/* Informations site web */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-playfair font-semibold mb-4">Informations relatives au site internet</h2>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h3 className="font-semibold">Directeur de la publication</h3>
                  <p>Arnaud Doria</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold">Hébergement</h3>
                  <p className="text-muted-foreground">Site hébergé via la plateforme Lovable</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold">Propriété intellectuelle</h3>
                  <p className="text-muted-foreground">
                    L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive d'AD Investissement Conseil, 
                    à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement 
                    interdite sans l'accord écrit préalable d'AD Investissement Conseil.
                  </p>
                </div>
              </div>
            </section>

            {/* Protection des données */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-playfair font-semibold mb-4">Protection des données personnelles</h2>
              
              <div className="space-y-4 text-sm">
                <p className="text-muted-foreground">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, 
                  AD Investissement Conseil s'engage à protéger la vie privée et les données personnelles de ses clients et prospects.
                </p>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold mb-2">Responsable du traitement</h3>
                  <p>AD INVESTISSEMENT CONSEIL</p>
                  <p>14 Rue des Poissonniers, 92200 Neuilly-sur-Seine</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold mb-2">Vos droits</h3>
                  <p className="text-muted-foreground mb-2">
                    Conformément à la réglementation, vous disposez des droits suivants concernant vos données personnelles :
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                    <li>Droit d'accès et de rectification</li>
                    <li>Droit à l'effacement (« droit à l'oubli »)</li>
                    <li>Droit à la limitation du traitement</li>
                    <li>Droit à la portabilité des données</li>
                    <li>Droit d'opposition</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">
                    Pour exercer ces droits, vous pouvez nous contacter à l'adresse : doria@adconseil.fr
                  </p>
                </div>
              </div>
            </section>

            {/* Liens utiles */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-playfair font-semibold mb-4">Liens utiles</h2>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <a 
                  href="https://www.orias.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:underline"
                >
                  <span>→</span> ORIAS - Registre des intermédiaires
                </a>
                <a 
                  href="https://acpr.banque-france.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:underline"
                >
                  <span>→</span> ACPR
                </a>
                <a 
                  href="https://www.amf-france.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:underline"
                >
                  <span>→</span> AMF - Autorité des Marchés Financiers
                </a>
                <a 
                  href="https://www.cnil.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:underline"
                >
                  <span>→</span> CNIL - Protection des données
                </a>
              </div>
            </section>

            <div className="text-xs text-muted-foreground text-center pt-8">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
