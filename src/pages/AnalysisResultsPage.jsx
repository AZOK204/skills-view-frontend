import React, { useState } from 'react';
import { useInView } from '../utils/hooks';
import Logo from '../components/Logo';

const AnalysisResultsPage = () => {
  const [containerRef, containerVisible] = useInView();
  const [selectedTeam, setSelectedTeam] = useState('Équipe A');
  const [selectedGroup, setSelectedGroup] = useState('Collectif');

  // Mock video clips data
  const videoClips = [
    {
      id: 1,
      name: 'passing-1.mp4',
      type: 'passing',
      players: ['M', 'M'],
    },
    {
      id: 2,
      name: 'interception_1.mp4',
      type: 'interception',
      players: ['M'],
    },
    {
      id: 3,
      name: 'dribble-2.mp4',
      type: 'dribble',
      players: ['M'],
    },
    {
      id: 4,
      name: 'goal-1.mp4',
      type: 'goal',
      players: [],
    },
  ];

  return (

      <div className="min-h-screen bg-dark overflow-hidden ">
      <div className="fixed">
        <Logo />
      </div>

      {/* Main Content */}
      <main className="background-color-login w-full min-h-screen flex justify-center items-center flex-col  px-4 pt-16 ">

            <h1 className="text-white  text-2xl leading-6 sm:leading-7 sm:text-4xl font-extrabold  text-center mx-auto traking-[-1.2px] mt-4  sm:mb-10">
              Merci d’avoir utilisé SkillsView, <br />voici <span className="text-primary">votre analyse </span>
            </h1>
        {/* Main Container */}
        <div
          ref={containerRef}
          className={`max-w-4xl mx-auto w-full space-y-6 fade-in-up-scroll scale-95 ${
            containerVisible ? 'visible' : ''
          }`}
        >
          {/* Detailed Analysis Section */}
          <div className="rounded-lg p-6 border border-[#FFFFFF1A]" style={{ backgroundColor: '#00000033' }}>
            <h3 className="text-gray-text text-lg tracking-[-0.36px]">Votre Analyse Détaillée</h3>
            <p className="text-gray-light text-sm mb-4 leading-6">
              Sélectionnez une équipe pour télécharger l'analyse PDF correspondante.
            </p>
        <div className="flex w-full flex-col sm:flex-row  justify-between sm:items-end gap-4">
            <div className=" flex flex-col flex-1 items-start gap-1.5">
              <label className="text-white text-sm leading-6 ">Équipe</label>
              <select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="w-full  h-10 px-4 rounded-lg text-white text-sm"
                style={{
                   backgroundColor: '#FFFFFF1A',
                  borderTop: '1px solid #FFFFFF33',
                  border: '1px solid #FFFFFF33',
                }}
              >
                <option value="Équipe A">Équipe A</option>
                <option value="Équipe B">Équipe B</option>
                <option value="Équipe C">Équipe C</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-2 rounded-lg font-medium text-sm transition-all bg-primary text-white h-10 cursor-pointer">
                Télécharger le PDF
              </button>
              <button className="px-6 py-2 rounded-lg font-medium text-sm transition-all bg-primary text-white h-10 cursor-pointer">
                Télécharger le CSV
              </button>
            </div>
                </div>
           
          </div>

          {/* Video Clips Section */}
          <div className="rounded-lg p-6 mb-10 border border-[#FFFFFF1A]" style={{ backgroundColor: '#00000033' }}>
            <h3 className="text-white text-xl leading-8 traking-[-0.36px]">Clips Vidéos</h3>
            <p className="text-gray-light text-sm mb-4 leading-6">
              Filtrez et visionnez les clips par équipe et par joueur.
            </p>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
           
    <div className=" flex flex-col flex-1 items-start gap-1.5">
              <label className="text-white text-sm leading-6 ">Équipe</label>
              <select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                className="w-full  h-10 px-4 rounded-lg text-white text-sm"
                style={{
                   backgroundColor: '#FFFFFF1A',
                  borderTop: '1px solid #FFFFFF33',
                  border: '1px solid #FFFFFF33',
                }}
              >
                <option value="Équipe A">Équipe A</option>
                <option value="Équipe B">Équipe B</option>
                <option value="Équipe C">Équipe C</option>
              </select>
            </div>
             <div className=" flex flex-col flex-1 items-start gap-1.5">
                <label className="text-white text-sm leading-6">Joueur / Groupe</label>
                <select
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                  className="w-full h-10 px-4 rounded-lg text-white text-sm"
                  style={{
                   backgroundColor: '#FFFFFF1A',
                  borderTop: '1px solid #FFFFFF33',
                  border: '1px solid #FFFFFF33',
                }}
                >
                  <option value="Collectif">Collectif</option>
                  <option value="Joueur 1">Joueur 1</option>
                  <option value="Joueur 2">Joueur 2</option>
                  <option value="Joueur 3">Joueur 3</option>
                </select>
              </div>
            </div>

            {/* Video Clips List */}
            <div className="space-y-4 mb-6">
              {videoClips.map((clip) => (
                <div
                  key={clip.id}
                  className="rounded-lg p-4 flex items-center justify-between"
                   style={{
                   backgroundColor: '#FFFFFF1A',
 
                }}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-white text-sm">{clip.name}</span>
                  </div>  
             
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-2 rounded-lg font-medium text-sm transition-all bg-primary text-white h-10 cursor-pointer">
                Télécharger le MP4
              </button>
              <button className="px-6 py-2 rounded-lg font-medium text-sm transition-all bg-primary text-white h-10 cursor-pointer">
                Tout télécharger
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AnalysisResultsPage;
