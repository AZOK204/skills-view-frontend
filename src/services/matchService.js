import axiosInstance from './axiosInstance';

/**
 * Service pour les opérations liées aux matchs et vidéos
 * Mock data pour le moment
 */

const mockMatches = [
  {
    id: 1,
    teamName: 'FC Paris',
    opponentName: 'AS Monaco',
    date: '2025-11-10',
    score: '3-1',
    duration: '90 min',
    videoUrl: null,
    stats: {
      totalPasses: 512,
      successfulPasses: 478,
      shots: 18,
      shotsOnTarget: 8,
    },
  },
  {
    id: 2,
    teamName: 'FC Paris',
    opponentName: 'Marseille',
    date: '2025-11-03',
    score: '2-2',
    duration: '90 min',
    videoUrl: null,
    stats: {
      totalPasses: 489,
      successfulPasses: 445,
      shots: 15,
      shotsOnTarget: 6,
    },
  },
];

export const matchService = {
  /**
   * Récupérer tous les matchs
   */
  getAllMatches: async () => {
    try {
      // const response = await axiosInstance.get('/matches');
      return { success: true, data: mockMatches };
    } catch (error) {
      console.error('Error fetching matches:', error);
      throw error;
    }
  },

  /**
   * Récupérer le dernier match
   */
  getLatestMatch: async () => {
    try {
      // const response = await axiosInstance.get('/matches/latest');
      return { success: true, data: mockMatches[0] };
    } catch (error) {
      console.error('Error fetching latest match:', error);
      throw error;
    }
  },

  /**
   * Récupérer les détails d'un match
   */
  getMatchById: async (id) => {
    try {
      // const response = await axiosInstance.get(`/matches/${id}`);
      const match = mockMatches.find((m) => m.id === id);
      if (!match) throw new Error('Match not found');
      return { success: true, data: match };
    } catch (error) {
      console.error('Error fetching match:', error);
      throw error;
    }
  },

  /**
   * Importer une vidéo de match
   */
  uploadVideo: async (file, matchData) => {
    try {
      const formData = new FormData();
      formData.append('video', file);
      formData.append('data', JSON.stringify(matchData));

      // const response = await axiosInstance.post('/matches/upload', formData, {
      //   headers: { 'Content-Type': 'multipart/form-data' },
      // });

      // Mock response
      return {
        success: true,
        message: 'Vidéo uploadée avec succès',
        data: { id: Date.now(), ...matchData },
      };
    } catch (error) {
      console.error('Error uploading video:', error);
      throw error;
    }
  },

  /**
   * Récupérer les clips enregistrés
   */
  getRecordedClips: async () => {
    try {
      // const response = await axiosInstance.get('/clips');
      return {
        success: true,
        data: [
          { id: 1, title: 'But de Mbappé', duration: '15s', thumbnail: null },
          { id: 2, title: 'Dégagement spectaculaire', duration: '8s', thumbnail: null },
        ],
      };
    } catch (error) {
      console.error('Error fetching clips:', error);
      throw error;
    }
  },
};

export default matchService;
