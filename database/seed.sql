-- STRIPESNYC Seed Data

INSERT INTO officials (
  id,
  first_name,
  last_name,
  email,
  phone,
  role,
  certification_level,
  preferred_positions
) VALUES (
  1,
  'Sample',
  'Official',
  'official@example.com',
  '555-000-0000',
  'official',
  'Varsity',
  'Referee, Umpire, Line Judge'
);

INSERT INTO assignors (
  id,
  first_name,
  last_name,
  email,
  phone
) VALUES (
  1,
  'Sample',
  'Assignor',
  'assignor@example.com',
  '555-111-1111'
);

INSERT INTO games (
  id,
  home_team,
  away_team,
  game_date,
  game_time,
  location,
  league,
  status
) VALUES (
  1,
  'Home Team',
  'Away Team',
  'TBD',
  'TBD',
  'TBD Field',
  'STRIPESNYC Pilot League',
  'scheduled'
);

INSERT INTO assignments (
  id,
  game_id,
  official_id,
  position,
  status
) VALUES (
  1,
  1,
  1,
  'Referee',
  'pending'
);

INSERT INTO availability (
  id,
  official_id,
  available_date,
  status,
  notes
) VALUES (
  1,
  1,
  'TBD',
  'available',
  'Sample availability record'
);

INSERT INTO crewsync_messages (
  id,
  game_id,
  sender_id,
  message,
  priority
) VALUES (
  1,
  1,
  1,
  'CrewSync Live sample message: confirm arrival time and field location.',
  'normal'
);