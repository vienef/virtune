import { toHours, toSeconds } from '../utilities/math';

const mysteriousDreamyLaidBack = {
  'reaubeau_for_you': {
    title: 'For You',
    artist: ['ReauBeau', 'Eline Mann'],
    genre: ['Trap'],
    duration: '2:44',
    description: ''
  },
  'thorne_behind': {
    title: 'Behind',
    artist: ['Thorne', 'Andrew A'],
    genre: ['Future House'],
    duration: '3:05',
    description: ''
  },
  'jack_shore_memory_nights': {
    title: 'Memory Nights',
    artist: ['Jack Shore', 'KORA'],
    genre: ['Future House'],
    duration: '3:16',
    description: ''
  },
  'beauz_alone': {
    title: 'Alone',
    artist: ['BEAUZ', 'Heleen'],
    genre: ['Future House'],
    duration: '2:37',
    description: ''
  },
  'ifeature_insanity': {
    title: 'Insanity',
    artist: ['iFeature'],
    genre: ['Electronic'],
    duration: '2:59',
    description: ''
  },
  'cadmium_believe_me': {
    title: 'Believe Me',
    artist: ['Cadmium', 'JAMZ', 'SIMONNE'],
    genre: ['Future House'],
    duration: '3:16',
    description: ''
  },
  'simbai_set_me_free': {
    title: 'Set Me Free',
    artist: ['Simbai', 'Frizzy The Streetz'],
    genre: ['Trap'],
    duration: '2:49',
    description: ''
  },
  'millbrook_lost_without_you': {
    title: 'Lost Without You',
    artist: ['Millbrook', 'Felix Samuel'],
    genre: ['Drum & Bass'],
    duration: '3:44',
    description: ''
  },
  'goodknight_freedom': {
    title: 'Freedom',
    artist: ['Goodknight.'],
    genre: ['Trap'],
    duration: '3:04',
    description: ''
  },
  'beave_talk': {
    title: 'Talk',
    artist: ['Beave'],
    genre: ['Chill'],
    duration: '3:02',
    description: ''
  },
  'rival_superhero_in_my_sleep': {
    title: 'Superhero In My Sleep',
    artist: ['Rival', 'Asketa & Natam Chaim'],
    genre: ['Electronic'],
    duration: '3:06',
    description: ''
  },
  'arc_north_symphony': {
    title: 'Symphony',
    artist: ['Arc North', 'Donna Tella'],
    genre: ['Chill'],
    duration: '3:10',
    description: ''
  },
  'simbai_crazy': {
    title: 'Crazy',
    artist: ['Simbai', 'Frizzy The Streetz'],
    genre: ['Chill'],
    duration: '3:01',
    description: ''
  }
};

const epicEnergetic = {
  'dirty_palm_legacy': {
    title: 'Legacy',
    artist: ['Dirty Palm', 'Benix'],
    genre: ['Future House'],
    duration: '2:39',
    description: ''
  },
  'chime_arcade_dwellers': {
    title: 'Arcade Dwellers',
    artist: ['Chime', 'MDK'],
    genre: ['House'],
    duration: '4:20',
    description: ''
  },
  'nct_news_to_me': {
    title: 'News To Me',
    artist: ['NCT', 'Shiah Maisel', 'Too Martian'],
    genre: ['Electronic'],
    duration: '3:33',
    description: ''
  },
  'm.i.m.e_push_the_gas': {
    title: 'Push The Gas',
    artist: ['M.I.M.E', 'The LJ'],
    genre: ['Trap'],
    duration: '2:48',
    description: ''
  },
  'dirty_palm_ropes': {
    title: 'Ropes',
    artist: ['Dirty Palm', 'Chandler Jewels'],
    genre: ['Trap'],
    duration: '3:08',
    description: ''
  },
  "halvorsen_phoenix_(but_it's_punk_rock)": {
    title: "Phoenix (But It's Punk Rock)",
    artist: ['Halvorsen', 'Netrum'],
    duration: '3:44',
    description: ''
  },
  'jonth_heartless': {
    title: 'Heartless',
    artist: ['Jonth', 'Tom Wilson', 'Facading', 'Jagsy', 'Vosai', 'RudeLies', 'Domastic'],
    genre: ['Electronic'],
    duration: '3:03',
    description: ''
  },
  'curbi_what_you_like': {
    title: 'What You Like',
    artist: ['Curbi'],
    genre: ['Bass'],
    duration: '2:38',
    description: ''
  },
  'thykier_shimmer': {
    title: 'Shimmer',
    artist: ['Thykier'],
    genre: ['Future House'],
    album: 'Shimmer EP',
    duration: '2:55',
    description: ''
  },
  'thykier_outside': {
    title: 'Outside',
    artist: ['Thykier'],
    genre: ['Future House'],
    album: 'Shimmer EP',
    duration: '2:51',
    description: ''
  },
  'thykier_inferior': {
    title: 'Inferior',
    artist: ['Thykier'],
    genre: ['House'],
    album: 'Shimmer EP',
    duration: '3:17',
    description: ''
  },
  'doctor_neiman_wait_for_me': {
    title: 'Wait For Me',
    artist: ['Doctor Neiman', 'Micah Martin'],
    genre: ['Electronic'],
    duration: '3:35',
    description: ''
  },
  'subshock_&_evangelos_beyond_the_skies': {
    title: 'Beyond The Skies',
    artist: ['Subshock & Evangelos', 'MIDNIGHT CVLT'],
    genre: ['House'],
    duration: '2:49',
    description: ''
  },
  'fabian_mazur_elevate': {
    title: 'Elevate',
    artist: ['Fabian Mazur', 'Arcando'],
    genre: ['Trap'],
    duration: '2:52',
    description: ''
  },
  'tim_beeren_no_pressure': {
    title: 'No Pressure',
    artist: ['Tim Beeren', 'Jon Becker', 'CHENDA'],
    genre: ['Drumstep'],
    duration: '3:31',
    description: ''
  },
  'roy_knox_waterfall': {
    title: 'Waterfall',
    artist: ['ROY KNOX', 'Ellen Louise'],
    genre: ['Drumstep'],
    duration: '3:37',
    description: ''
  },
  'unknown_brain_phenomenon': {
    title: 'Phenomenon',
    artist: ['Unknown Brain', 'Dax', 'Hoober', 'VinDon'],
    genre: ['Trap', 'Bass'],
    album: 'Faceless',
    duration: '2:56',
    description: ''
  },
  'wateva_get_$': {
    title: 'Get $',
    artist: ['WATEVA', 'Fiveight'],
    genre: ['Electronic'],
    duration: '2:54',
    description: ''
  },
  'jpb_long_night': {
    title: 'Long Night',
    artist: ['JPB', 'Marvin Divine'],
    genre: ['Trap'],
    duration: '2:05',
    description: ''
  },
  'heuse_daylight': {
    title: 'Daylight',
    artist: ['Heuse', 'WOLFHOWL', 'RIELL'],
    genre: ['Electronic'],
    duration: '2:53',
    description: ''
  },
  'jonth_collapse': {
    title: 'Collapse',
    artist: ['Jonth'],
    genre: ['Future House'],
    duration: '2:31',
    description: ''
  },
  'clarx_money': {
    title: 'Money',
    artist: ['Clarx'],
    genre: ['Future House'],
    duration: '2:38',
    description: ''
  },
  'teyeq_pull_me_down': {
    title: 'Pull Me Down',
    artist: ['Teyeq'],
    genre: ['Future House'],
    duration: '2:55',
    description: ''
  },
  'rival_live_a_lie': {
    title: 'Live A Lie',
    artist: ['Rival', 'Egzod', 'Andreas Stone'],
    genre: ['Electronic'],
    duration: '3:32',
    description: ''
  },
  'levianth_real_love': {
    title: 'Real Love',
    artist: ['Levianth', 'Acejax'],
    genre: ['Trap'],
    duration: '2:42',
    description: ''
  },
  'asketa_&_natan_chaim_warriors': {
    title: 'Warriors',
    artist: ['Asketa & Natan Chaim', 'Requenze', 'M.I.M.E'],
    genre: ['Trap'],
    duration: '3:48',
    description: ''
  },
  'unknown_brain_war_zone': {
    title: 'War Zone',
    artist: ['Unknown Brain', 'M.I.M.E'],
    genre: ['Bass'],
    duration: '3:03',
    description: ''
  },
  'feint_shockwave': {
    title: 'Shockwave',
    artist: ['Feint'],
    genre: ['Drum & Bass'],
    duration: '4:09',
    description: ''
  },
  'wide_awake_something_more': {
    title: 'Something More',
    artist: ['WiDE AWAKE'],
    genre: ['Trap'],
    duration: '3:05',
    description: ''
  },
  'distrion_drakkar': {
    title: 'Drakkar',
    artist: ['Distrion', 'Electro-Light'],
    genre: ['Future House'],
    duration: '3:34',
    description: ''
  },
  'koven_never_have_i_felt_this': {
    title: 'Never Have I Felt This',
    artist: ['Koven'],
    genre: ['Trap'],
    duration: '4:06',
    description: ''
  },
  'last_heroes_eclipse': {
    title: 'Eclipse',
    artist: ['Last Heroes', 'AERYN', 'TwoWorldsApart'],
    genre: ['Melodic Dubstep'],
    duration: '4:37',
    description: ''
  }
};

const hopefulRestless = {
  'manshn_online': {
    title: 'Online',
    artist: ['MANSHN'],
    genre: ['Drum & Bass'],
    duration: '3:04',
    description: ''
  },
  'if_found_twenty_five': {
    title: 'twenty five',
    artist: ['if found', 'Luma'],
    genre: ['Electronic'],
    album: 'twenty five EP',
    duration: '3:18',
    description: ''
  },
  'if_found_die_4_u': {
    title: 'die 4 u',
    artist: ['if found', 'nøll', 'damnboy!'],
    genre: ['Electronic', 'Melodic Dubstep'],
    duration: '2:54',
    description: ''
  },
  'wbn_radio': {
    title: 'Radio',
    artist: ['WBN', 'Mojnz'],
    genre: ['Glitch Hop'],
    duration: '3:26',
    description: ''
  },
  'johnning_what_the_hell_(oblvyn_remix)': {
    title: 'WHAT THE HELL (OBLVYN Remix)',
    artist: ['Johnning', 'OBLVYN'],
    genre: ['Melodic Dubstep'],
    duration: '2:59',
    description: ''
  },
  'axel_oliver_survive': {
    title: 'Survive',
    artist: ['Axel Oliver', 'THEBOYWITHSPEC'],
    genre: ['Hardstyle'],
    duration: '4:08',
    description: ''
  },
  'near_x_far_not_enough': {
    title: 'Not Enough',
    artist: ['Near x Far'],
    genre: ['Drum & Bass'],
    duration: '3:40',
    description: ''
  },
  'bvrnout_take_it_easy_(dnb_edit)': {
    title: 'Take It Easy (DNB Edit)',
    artist: ['BVRNOUT', 'Mia Vaile'],
    genre: ['Drum & Bass'],
    duration: '3:24',
    description: ''
  },
  'egzod_runaway': {
    title: 'Runaway',
    artist: ['Egzod', 'Arcando', 'Mathew V'],
    genre: ['Trap'],
    duration: '3:26',
    description: ''
  }
};

const darkRomantic = {
  'bryan_finlay_walls': {
    title: 'Walls',
    artist: ['Bryan Finlay', 'Rival'],
    genre: ['Trap'],
    duration: '4:00',
    description: ''
  },
  'vosai_love_of_my_life': {
    title: 'Love Of My Life',
    artist: ['Vosai'],
    genre: ['Trap'],
    duration: '3:10',
    description: ''
  },
  'leo_the_kind_let_your_heartbreak': {
    title: 'Let Your Heartbreak',
    artist: ['Leo The Kind', 'EMDI', 'RØGUENETHVN'],
    genre: ['Trap'],
    duration: '2:32',
    description: ''
  },
  'jpb_get_over_you': {
    title: 'Get Over You',
    artist: ['JPB', 'Valentina Franco'],
    genre: ['Trap'],
    duration: '3:29',
    description: ''
  },
  'axol_bleed': {
    title: 'Bleed',
    artist: ['Axol', 'The Tech Thieves'],
    genre: ['Trap'],
    duration: '4:11',
    description: ''
  },
  'ashley_apollodor_where_was_i': {
    title: 'Where Was I',
    artist: ['Ashley Apollodor', 'Whales', 'Roee Yeger'],
    genre: ['Dubstep'],
    duration: '5:27',
    description: ''
  }
};

export const library = {
  'mysterious_dreamy_laid_back': {
    title: 'Mysterious, Dreamy, Laid Back',
    playlist: mysteriousDreamyLaidBack,
    length: findLength(mysteriousDreamyLaidBack),
    duration: sumDuration(mysteriousDreamyLaidBack),
    description: 'Resting lion photo by Saad Khan on Unsplash.',
    note: 'Songs to listen to while chilling out.'
  },
  'epic_energetic': {
    title: 'Epic, Energetic',
    playlist: epicEnergetic,
    length: findLength(epicEnergetic),
    duration: sumDuration(epicEnergetic),
    description: 'Photo of a man holding a levitating joystick by Gabriel Dias Pimenta on Unsplash.',
    note: 'Mood booster for gamers!'
  },
  'hopeful_restless': {
    title: 'Hopeful, Restless',
    playlist: hopefulRestless,
    length: findLength(hopefulRestless),
    duration: sumDuration(hopefulRestless),
    description: 'Red light lines photo by Tusik Only on Unsplash.',
    note: 'Push the gas!'
  },
  'dark_romantic': {
    title: 'Dark Romantic',
    playlist: darkRomantic,
    length: findLength(darkRomantic),
    duration: sumDuration(darkRomantic),
    description: 'Photo of a pair of hands holding a heart-shaped flower bucket by Amy Shamblen on Unsplash.',
    note: 'Feel the emotion T.T'
  }
};

export const libraryList = Object.keys(library);

function findLength(list) {
  return Object.keys(list).length;
}

function sumDuration(playlist) {
  const duration = [];

  for (let song in playlist) {
    duration.push(playlist[song].duration);
  }

  const seconds = [...duration].reduce((sum, d) => sum + toSeconds(d), 0);

  return toHours(seconds);
}
