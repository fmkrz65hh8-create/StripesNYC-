-- STRIPESNYC Database Schema

CREATE TABLE officials (
  id INTEGER PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  role TEXT DEFAULT 'official',
  certification_level TEXT,
  preferred_positions TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE assignors (
  id INTEGER PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE games (
  id INTEGER PRIMARY KEY,
  home_team TEXT NOT NULL,
  away_team TEXT NOT NULL,
  game_date TEXT NOT NULL,
  game_time TEXT,
  location TEXT,
  league TEXT,
  status TEXT DEFAULT 'scheduled',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE assignments (
  id INTEGER PRIMARY KEY,
  game_id INTEGER NOT NULL,
  official_id INTEGER NOT NULL,
  position TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (game_id) REFERENCES games(id),
  FOREIGN KEY (official_id) REFERENCES officials(id)
);

CREATE TABLE availability (
  id INTEGER PRIMARY KEY,
  official_id INTEGER NOT NULL,
  available_date TEXT NOT NULL,
  status TEXT NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (official_id) REFERENCES officials(id)
);

CREATE TABLE crewsync_messages (
  id INTEGER PRIMARY KEY,
  game_id INTEGER,
  sender_id INTEGER NOT NULL,
  message TEXT NOT NULL,
  priority TEXT DEFAULT 'normal',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (game_id) REFERENCES games(id),
  FOREIGN KEY (sender_id) REFERENCES officials(id)
);