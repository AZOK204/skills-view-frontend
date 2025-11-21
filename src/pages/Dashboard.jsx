import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import StatusBadge from "../components/StatusBadge";
import VideoUploader from "../components/VideoUploader";
import { useInView } from "../utils/hooks";
import authService from "../services/authService";
import matchService from "../services/matchService";
import Logo from "../components/Logo";
import match from "../assets/match.png";
import SubscriptionManagement from "../components/SubscriptionManagement";

/** Composant OverviewSection - Matches */
const OverviewSection = () => {
  const [latestMatch, setLatestMatch] = React.useState(null);
  const [titleRef, titleVisible] = useInView();
  const [cardsRef, cardsVisible] = useInView();
  const [videosRef, videosVisible] = useInView();
  const [videosClip1Ref, videosClip1Visible] = useInView();
  const [videosClip2Ref, videosClip2Visible] = useInView();

  React.useEffect(() => {
    const fetchMatch = async () => {
      try {
        const response = await matchService.getLatestMatch();
        setLatestMatch(response.data);
      } catch (error) {
        console.error("Error fetching match:", error);
      }
    };
    fetchMatch();
  }, []);

  return (
    <div className="space-y-3 scale-90">
      {/* Video Uploader */}

      <h2
        ref={titleRef}
        className={`sm:text-lg font-alt text-white tracking-[-0.33px] leading-6 mb-4 fade-in-up-scroll ${
          titleVisible ? "visible" : ""
        }`}
      >
        Derniers Matchs
      </h2>

      {/* Matches Cards */}
      <div
        ref={cardsRef}
        className={`grid grid-cols-1 md:grid-cols-3 gap-3 fade-in-up-scroll ${
          cardsVisible ? "visible" : ""
        }`}
      >
        <div className="bg-dark-dashboard rounded-xl p-4 w-full sm:max-w-80">
          <img src={match} alt="match capture d'ecran" className="w-full" />
          <div className="mt-3">
            <p className="text-gray-text font-alt leading-5">
              PSG vs Marseille
            </p>
            <p className="text-sm text-gray-light font-alt leading-5">
              16Oct2023 - Victoire 3-1
            </p>
          </div>
        </div>
        <div className="bg-dark-dashboard rounded-xl p-4 w-full sm:max-w-80">
          <img src={match} alt="match capture d'ecran" className="w-full" />
          <div className="mt-3">
            <p className="text-gray-text font-alt leading-5">
              PSG vs Marseille
            </p>
            <p className="text-sm text-gray-light font-alt leading-5">
              16Oct2023 - Victoire 3-1
            </p>
          </div>
        </div>
        <div className="bg-dark-dashboard rounded-xl p-4 w-full sm:max-w-80">
          <img src={match} alt="match capture d'ecran" className="w-full" />
          <div className="mt-3">
            <p className="text-gray-text font-alt leading-5">
              PSG vs Marseille
            </p>
            <p className="text-sm text-gray-light font-alt leading-5">
              16Oct2023 - Victoire 3-1
            </p>
          </div>
        </div>
      </div>

      {/* Last Match
      {latestMatch && (
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Dernier match analysé</h2>
          <div className="space-y-3">
            <p className="text-gray-300">
              <span className="font-semibold">{latestMatch.teamName}</span>
              {' '}
              vs
              {' '}
              <span className="font-semibold">{latestMatch.opponentName}</span>
            </p>
            <p className="text-2xl font-bold text-primary">{latestMatch.score}</p>
            <p className="text-gray-400">{latestMatch.date}</p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-700 rounded p-3">
                <p className="text-gray-400 text-sm">Passes réussies</p>
                <p className="text-2xl font-bold text-white">
                  {latestMatch.stats.successfulPasses}/{latestMatch.stats.totalPasses}
                </p>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <p className="text-gray-400 text-sm">Tirs cadrés</p>
                <p className="text-2xl font-bold text-white">
                  {latestMatch.stats.shotsOnTarget}/{latestMatch.stats.shots}
                </p>
              </div>
            </div>
          </div>
        </div> )} */}

      <div className="space-y-3 mt-10">
        <h2
          ref={videosRef}
          className={`sm:text-lg font-alt text-white tracking-[-0.33px] leading-6  mb-4 fade-in-up-scroll ${
            videosVisible ? "visible" : ""
          }`}
        >
          Vidéos Enregistrées
        </h2>
        {/* match clip */}

        <div
          ref={videosClip1Ref}
          className={`flex items-center sm:items-start  bg-dark-dashboard rounded-xl p-4 w-full gap-4 sm:max-h-32 fade-in-up-scroll ${
            videosClip1Visible ? "visible" : ""
          }`}
        >
          <div className="h-full">
            <img
              src={match}
              alt="match capture d'ecran"
              className="object-contain max-h-[90px]"
            />
          </div>
          <div className="flex flex-col sm:flex-row w-full">
            <div className="flex flex-col gap-0.5 flex-1 py-2">
              <p className="text-gray-text font-alt leading-5">
                Analyse de match vs PSG
              </p>
              <p className="text-sm text-gray-light font-alt leading-5">
                Envoyé le 17 Oct2023
              </p>
              <StatusBadge status="ready" />
            </div>
            <div className="flex gap-1.5 text-xs sm:text-sm sm:self-center">
              <button className="rounded-lg bg-[#FFFFFF1A] px-3 py-2 sm:p-2.5 cursor-pointer">
                Telecharger
              </button>
              <button className="rounded-lg bg-[#FFFFFF1A] px-3 py-2 sm:p-2.5 cursor-pointer">
                Suprimmer
              </button>
            </div>
          </div>
        </div>
        <div
          ref={videosClip2Ref}
          className={`flex items-center sm:items-start  bg-dark-dashboard rounded-xl p-4 w-full gap-4 sm:max-h-32 fade-in-up-scroll ${
            videosClip2Visible ? "visible" : ""
          }`}
        >
          <div className="h-full">
            <img
              src={match}
              alt="match capture d'ecran"
              className="object-contain max-h-[90px]"
            />
          </div>
          <div className="flex flex-col sm:flex-row w-full ">
            <div className="flex flex-col gap-0.5 flex-1 py-2">
              <p className="text-gray-text font-alt leading-5">
                Analyse de match vs PSG
              </p>
              <p className="text-sm text-gray-light font-alt leading-5">
                Envoyé le 17 Oct2023
              </p>
              <StatusBadge status="processing" />
            </div>
            <div className="flex gap-1.5 text-xs sm:text-sm sm:self-center ">
              <button className="rounded-lg bg-[#FFFFFF1A] px-3 py-2 sm:p-2.5 cursor-pointer">
                Telecharger
              </button>
              <button className="rounded-lg bg-[#FFFFFF1A] px-3 py-2 sm:p-2.5 cursor-pointer">
                Suprimmer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Dashboard Page principale */
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const user = authService.getCurrentUser();
  const [uploaderRef, uploaderVisible] = useInView();
  const [subscriptionRef, subscriptionVisible] = useInView();

  // Redirection si pas authentifié
  React.useEffect(() => {
    if (!authService.isAuthenticated()) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="flex h-full bg-dark overflow-hidden">
      {/* Main Content */}
      <main className="background-color-login w-full min-h-screen">
        <Logo />

        {/* Page Content - 2 Column Grid Layout */}
        <div className=" sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:gap-6 ">
            {/* Left Column - Overview Section (1/3 width on desktop) */}

            <div className="flex flex-col gap-6 mt-20">
              <div
                ref={uploaderRef}
                className={`fade-in-left-scroll ${uploaderVisible ? "visible" : ""}`}
              >
                <VideoUploader />
              </div>
              <div
                ref={subscriptionRef}
                className={`fade-in-left-scroll ${
                  subscriptionVisible ? "visible" : ""
                }`}
              >
                <SubscriptionManagement />
              </div>
            </div>
            {/* Right Column - Stacked Components (2/3 width on desktop) */}
            <div className="lg:col-span-2">
              <OverviewSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
