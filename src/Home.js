import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            className="home_image"
            src="https://www.amazon.fr/images/G/08/digital/video/gateway/placement/launch/PSG_S1/ICPAR_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_fr-FR._CB405642446_.jpg"
            alt=""
          />
          <div className="home__row">
            <Product
              id="5252525"
              title="Pèse Personne Impédancemètre, Balance Connecté, Pèse-Personne Électronique, Balance Impédancemètre de Haute Précision avec 13 Données Corporelles, Verre Trempée et Smartphone APP 180kg"
              price={19.99}
              img="https://www.amazon.fr/images/G/08/FR-hq/2020/img/Events/XCM_Manual_ORIGIN_1242261_1285519_FR_fr_brandweek_38_1w1b_fr_fr_3262057_379x304_1X_fr_FR._SY304_CB405874017_.jpg"
              rating={5}
            />
            <Product
              id="5257425"
              title="the product best"
              price={17.5}
              img="https://www.amazon.fr/images/G/08/FR-hq/2020/img/Events/XCM_Manual_ORIGIN_1242261_1285519_FR_fr_brandweek_38_1w1b_fr_fr_3262057_379x304_1X_fr_FR._SY304_CB405874017_.jpg"
              rating={2}
            />
          </div>
          <div className="home__row">
            <Product
              id="525288825"
              title="the product best one "
              price={100}
              img="https://www.amazon.fr/images/G/08/FR-hq/2020/img/Events/XCM_Manual_ORIGIN_1242261_1285519_FR_fr_brandweek_38_1w1b_fr_fr_3262057_379x304_1X_fr_FR._SY304_CB405874017_.jpg"
              rating={4}
            />
            <Product
              id="5252552525"
              title="Marque Amazon- Solimo Capsules Espresso, compatibles Nespresso*- café certifié UTZ, 100 capsules (2 x 50)"
              price={49.99}
              img="https://www.amazon.fr/images/G/08/FR-hq/2020/img/Events/XCM_Manual_ORIGIN_1242261_1285519_FR_fr_brandweek_38_1w1b_fr_fr_3262057_379x304_1X_fr_FR._SY304_CB405874017_.jpg"
              rating={3}
            />
            <Product
              id="5252525"
              title="the cool product"
              price={27.99}
              img="https://www.amazon.fr/images/G/08/FR-hq/2020/img/Events/XCM_Manual_ORIGIN_1242261_1285519_FR_fr_brandweek_38_1w1b_fr_fr_3262057_379x304_1X_fr_FR._SY304_CB405874017_.jpg"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id="525142525"
              title="Rowenta Set Air Force Flex 760 Aspirateur Balai sans Fil Multifonction + Tête Aqua Head 2en1 Puissance d'Aspiration Extrême 180 Air Watts Autonomie 1h15 Tube Flexible
              Revie"
              price={19.99}
              img="https://www.amazon.fr/images/G/08/FR-hq/2020/img/Events/XCM_Manual_ORIGIN_1242261_1285519_FR_fr_brandweek_38_1w1b_fr_fr_3262057_379x304_1X_fr_FR._SY304_CB405874017_.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
