import React from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "../utils/hooks";
import Logo from "../components/Logo";

const ManageSubscriptionPage = () => {
  const navigate = useNavigate();
  const progressPercentage = (12 / 20) * 100;
  const [cardRef, cardVisible] = useInView();

  const handleUpgrade = () => {
   navigate('/pricing-2')
    console.log("Upgrade clicked");
  };

  const handleCancel = () => {
    // Handle cancel logic
    console.log("Cancel clicked");
  };

  return (
    <div className="min-h-screen bg-dark overflow-hidden">
      <div className="fixed">
        <Logo />
      </div>

      {/* Main Content */}
      <main className="background-color-login w-full min-h-screen flex justify-center items-center flex-col  sm:px-4 ">
       <div
            ref={cardRef}
            className={`w-full max-w-4xl rounded-xl backdrop-blur scale-90 fade-in-up-scroll ${
              cardVisible ? "visible" : ""
            }`}
            style={{
              backgroundColor: "#FFFFFF1A",
              border: "1px solid #FFFFFF1A",
              boxShadow: "0px 0px 20px 0px #0000001A",
              backdropFilter: "blur(4px)",
            }}
          >
            {/* Top Section - Subscription Info */}
            <div
              className="w-full p-4 border-b"
              style={{ borderColor: "#FFFFFF1A" }}
            >
              <div className="flex justify-between items-start font-spline">
                {/* Left Part */}
                <div className="flex flex-col ">
                  <h2 className="text-gray-light text-xs leading-5  ">
                    Votre Abonnement Actuel
                  </h2>
                  <p className="text-gray-300 text-xl leading-6 tracking-[-0.36px] ">
                    Abonnement Premium
                  </p>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-[#34C759] rounded-full"></div>
                    <span className="text-[#33C758] text-xs leading-5 mt-1">
                      Actif
                    </span>
                  </div>
                </div>

                {/* Right Part */}
                <div className="flex flex-col gap-3 text-right">
                  <p className="text-gray-light text-sm leading-5 max-w-44 text-left">
                    Prochain renouvellement le 24 Juillet 2024
                  </p>
                  <p className="text-white text-lg leading-[27px] ">
                    19,99€  <span className="text-gray-light text-base">/ mois</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Bar Section */}
            <div className="w-full py-5 px-4 border-b font-spline"  style={{ borderColor: "#FFFFFF1A" }}>
              <div className="flex justify-between items-center ">
                <p className="text-gray-text text-sm leading-6">
                  Nombre de matchs restants
                </p>
                <p className="text-gray-light text-sm leading-[21px]">12/20 restants</p>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-[#FFFFFF33] rounded-full overflow-hidden mt-2">
                <div
                  className="h-full bg-primary transition-all duration-300 ease-in-out rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3  justify-between items-center text-spline p-4">
                <div className="flex items-center gap-3">

                <p className="text-sm text-gray-text cursor-pointer"> <span className="ml-1">Voir les moyens de paiement</span></p>
                <p  className="text-sm text-gray-text cursor-pointer" > <span className="ml-1">Historique de facturation</span> </p>
                </div>
                 <div className="flex flex-wrap justify-center sm:justify-start sm:flex-nowrap items-center gap-3">
              <button
                onClick={handleCancel}
                className=" w-full sm:w-50 h-12 px-5 bg-[#FFFFFF33] text-white  text-sm rounded-lg leading-6 traking-[0.24px] cursor-pointer"
              >
                Annuler l'Abonnement
              </button>
              
              <button
                onClick={handleUpgrade}
                className="w-full  sm:w-50 h-12 px-5 bg-primary text-dark  text-sm rounded-lg leading-6 traking-[0.24px] cursor-pointer"
              >
                Changer d'Abonnem…
              </button>
            </div>
            </div>
          </div>
      </main>
    </div>
  );
};

export default ManageSubscriptionPage;
