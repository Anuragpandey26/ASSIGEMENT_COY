import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DEMO_USER_ID = process.env.DEMO_USER_ID || "demo-user";

interface MockProfileSeed {
  userId: string;
  name: string;
  age: number;
  photoUrl: string;
  bio: string;
  cityOrCollege: string;
  interests: string[];
  hasIncomingLike: boolean; // whether this user seeded an incoming like to demo-user
}

const SEED_PROFILES: MockProfileSeed[] = [
  {
    userId: "user-01",
    name: "Elena Rostova",
    age: 25,
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    bio: "Architecture photographer, sourdough experimenter, and slow coffee enthusiast.",
    cityOrCollege: "London",
    interests: ["Architecture", "Photography", "Art", "Coffee"],
    hasIncomingLike: true,
  },
  {
    userId: "user-02",
    name: "Aarav Sharma",
    age: 26,
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    bio: "Product designer by day, acoustic guitarist by night. Big fan of indie films.",
    cityOrCollege: "Delhi",
    interests: ["Design", "Music", "Cinema", "Reading"],
    hasIncomingLike: true,
  },
  {
    userId: "user-03",
    name: "Sophie Dubois",
    age: 24,
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    bio: "Art history graduate, gallery hopper, and vintage bookstore explorer.",
    cityOrCollege: "Paris",
    interests: ["Art History", "Galleries", "Literature", "Travel"],
    hasIncomingLike: false,
  },
  {
    userId: "user-04",
    name: "Mateo Silva",
    age: 28,
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "Urban planner passionate about walkable cities, cycling, and natural wine.",
    cityOrCollege: "Barcelona",
    interests: ["Urbanism", "Cycling", "Wine", "Sustainability"],
    hasIncomingLike: true,
  },
  {
    userId: "user-05",
    name: "Maya Lin",
    age: 27,
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    bio: "Ceramics artist and botanical illustrator. Always hunting for the best matcha.",
    cityOrCollege: "San Francisco",
    interests: ["Ceramics", "Illustrations", "Tea", "Plants"],
    hasIncomingLike: false,
  },
  {
    userId: "user-06",
    name: "Julian Weber",
    age: 29,
    photoUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
    bio: "Documentary editor and vinyl collector. Let's debate 70s cinema soundtracks.",
    cityOrCollege: "Berlin",
    interests: ["Film Editing", "Vinyl", "Audio", "History"],
    hasIncomingLike: true,
  },
  {
    userId: "user-07",
    name: "Clara Johansson",
    age: 23,
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    bio: "Nordic literature researcher, wild swimmer, and weekend cabin lover.",
    cityOrCollege: "Stockholm University",
    interests: ["Literature", "Swimming", "Nature", "Writing"],
    hasIncomingLike: false,
  },
  {
    userId: "user-08",
    name: "Tariq Mansoor",
    age: 26,
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "Restaurateur in training. I believe every great conversation starts around food.",
    cityOrCollege: "Dubai",
    interests: ["Culinary", "Hospitality", "Travel", "Chess"],
    hasIncomingLike: true,
  },
  {
    userId: "user-09",
    name: "Chloe Bennett",
    age: 25,
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    bio: "Environmental journalist. Usually outdoors with a notebook or running along the coast.",
    cityOrCollege: "Sydney",
    interests: ["Journalism", "Trail Running", "Surfing", "Environment"],
    hasIncomingLike: false,
  },
  {
    userId: "user-10",
    name: "Kenji Sato",
    age: 30,
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    bio: "Landscape architect exploring Japanese minimalism and regenerative gardens.",
    cityOrCollege: "Kyoto",
    interests: ["Gardening", "Architecture", "Minimalism", "Hiking"],
    hasIncomingLike: true,
  },
  {
    userId: "user-11",
    name: "Amara Okonjo",
    age: 27,
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    bio: "Contemporary dancer and podcast producer. Believer in thoughtful rituals.",
    cityOrCollege: "Lagos",
    interests: ["Dance", "Podcasting", "Poetry", "Design"],
    hasIncomingLike: false,
  },
  {
    userId: "user-12",
    name: "Lucas Rossi",
    age: 28,
    photoUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
    bio: "Specialty coffee roaster and road cyclist. Looking for good brunch companions.",
    cityOrCollege: "Milan",
    interests: ["Coffee", "Cycling", "Gastronomy", "Design"],
    hasIncomingLike: true,
  },
  {
    userId: "user-13",
    name: "Hannah Kim",
    age: 24,
    photoUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    bio: "Industrial designer focused on sustainable materials. Huge fan of flea markets.",
    cityOrCollege: "Seoul",
    interests: ["Industrial Design", "Sustainability", "Thrifting", "Cinema"],
    hasIncomingLike: false,
  },
  {
    userId: "user-14",
    name: "Gabriel Santos",
    age: 29,
    photoUrl: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?auto=format&fit=crop&w=800&q=80",
    bio: "Marine biologist and scuba diver. Can talk about coral reefs for hours.",
    cityOrCollege: "Rio de Janeiro",
    interests: ["Marine Biology", "Diving", "Ocean", "Photography"],
    hasIncomingLike: false,
  },
  {
    userId: "user-15",
    name: "Ananya Sen",
    age: 25,
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    bio: "Economist with a secret passion for handloom textiles and jazz clubs.",
    cityOrCollege: "Kolkata",
    interests: ["Textiles", "Economics", "Jazz", "Reading"],
    hasIncomingLike: true,
  },
  {
    userId: "user-16",
    name: "Oliver Wright",
    age: 27,
    photoUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=800&q=80",
    bio: "Software craftsman, rock climber, and occasional watercolorist.",
    cityOrCollege: "Edinburgh",
    interests: ["Climbing", "Watercolor", "Coding", "Tea"],
    hasIncomingLike: false,
  },
  {
    userId: "user-17",
    name: "Isabella Moretti",
    age: 26,
    photoUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
    bio: "Botanical perfumer. Seeking harmony between natural notes and timeless aesthetics.",
    cityOrCollege: "Florence",
    interests: ["Perfumery", "Botany", "Art", "Travel"],
    hasIncomingLike: true,
  },
  {
    userId: "user-18",
    name: "Dmitri Kozlov",
    age: 31,
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    bio: "Chess instructor and classical pianist. Appreciates quiet evenings and sharp humor.",
    cityOrCollege: "Prague",
    interests: ["Chess", "Piano", "Philosophy", "Cinema"],
    hasIncomingLike: false,
  },
  {
    userId: "user-19",
    name: "Fatima Al-Zahra",
    age: 24,
    photoUrl: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=800&q=80",
    bio: "UX researcher obsessed with human habits. Lover of rooftop gardens and herbal infusions.",
    cityOrCollege: "Amman",
    interests: ["Psychology", "Gardening", "Tea", "Architecture"],
    hasIncomingLike: false,
  },
  {
    userId: "user-20",
    name: "Liam O'Connor",
    age: 28,
    photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    bio: "Folk musician and carpenter. Crafting wooden furniture and fiddle tunes.",
    cityOrCollege: "Dublin",
    interests: ["Carpentry", "Folk Music", "History", "Coffee"],
    hasIncomingLike: false,
  },
  {
    userId: "user-21",
    name: "Zoe Kravitz-Vance",
    age: 26,
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    bio: "Curator of independent publishing and zines. Always carrying a 35mm camera.",
    cityOrCollege: "Brooklyn, NY",
    interests: ["Publishing", "Film Photography", "Coffee", "Zines"],
    hasIncomingLike: true,
  },
  {
    userId: "user-22",
    name: "Nico Larson",
    age: 25,
    photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
    bio: "Nordic skier in winter, ceramicist in summer. Simple living advocate.",
    cityOrCollege: "Oslo",
    interests: ["Skiing", "Ceramics", "Minimalism", "Design"],
    hasIncomingLike: false,
  },
  {
    userId: "user-23",
    name: "Priya Nair",
    age: 27,
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    bio: "Biochemist decoding plant defense systems. Amateur classical dancer.",
    cityOrCollege: "Bengaluru",
    interests: ["Science", "Dance", "Books", "Yoga"],
    hasIncomingLike: false,
  },
  {
    userId: "user-24",
    name: "Felix Moreau",
    age: 29,
    photoUrl: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=800&q=80",
    bio: "Sommelier specializing in organic biodynamic wines. Loves jazz festivals.",
    cityOrCollege: "Bordeaux",
    interests: ["Wine", "Jazz", "Cooking", "Travel"],
    hasIncomingLike: false,
  },
  {
    userId: "user-25",
    name: "Astrid Lindgren",
    age: 23,
    photoUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    bio: "Illustrator of children's books and nature enthusiast. Enjoys pottery and tea.",
    cityOrCollege: "Copenhagen",
    interests: ["Illustration", "Pottery", "Nature", "Books"],
    hasIncomingLike: false,
  },
  {
    userId: "user-26",
    name: "Marcus Vance",
    age: 32,
    photoUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
    bio: "Civil rights attorney. Marathon runner and podcast fanatic.",
    cityOrCollege: "Chicago",
    interests: ["Law", "Marathons", "Running", "Jazz"],
    hasIncomingLike: false,
  },
  {
    userId: "user-27",
    name: "Yuki Tanaka",
    age: 26,
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    bio: "Pastry chef inspired by French and Japanese techniques. Delicate sweetness only.",
    cityOrCollege: "Tokyo",
    interests: ["Pastry", "Culinary", "Art", "Travel"],
    hasIncomingLike: false,
  },
  {
    userId: "user-28",
    name: "Samir Mehta",
    age: 28,
    photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    bio: "Fintech engineer, avid trekker in the Himalayas, and filter coffee purist.",
    cityOrCollege: "Mumbai",
    interests: ["Trekking", "Coffee", "Tech", "Photography"],
    hasIncomingLike: false,
  },
  {
    userId: "user-29",
    name: "Camille Laurent",
    age: 24,
    photoUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    bio: "Fashion archivist and vintage collector. Passionate about sustainable fashion.",
    cityOrCollege: "Lyon",
    interests: ["Fashion", "Vintage", "Sustainability", "Cinema"],
    hasIncomingLike: false,
  },
  {
    userId: "user-30",
    name: "David Kim",
    age: 27,
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "Neuroscience researcher and cellist. Enjoys quiet walks and sourdough baking.",
    cityOrCollege: "Toronto",
    interests: ["Neuroscience", "Cello", "Baking", "Hiking"],
    hasIncomingLike: false,
  },
  {
    userId: "user-31",
    name: "Siddharth Verma",
    age: 29,
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    bio: "Renewable energy consultant and amateur marathoner. Fan of podcasts and craft beer.",
    cityOrCollege: "Pune",
    interests: ["Renewables", "Running", "Podcasts", "Travel"],
    hasIncomingLike: false,
  },
  {
    userId: "user-32",
    name: "Leila Haddad",
    age: 25,
    photoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    bio: "Documentary photographer documenting Mediterranean craft traditions.",
    cityOrCollege: "Beirut",
    interests: ["Photography", "Crafts", "Culture", "Writing"],
    hasIncomingLike: false,
  },
];

export async function seedDatabase() {
  console.log("==> Starting Coy Discover database seed...");

  // 1. Ensure demo user exists
  await prisma.user.upsert({
    where: { id: DEMO_USER_ID },
    create: {
      id: DEMO_USER_ID,
      profile: {
        create: {
          name: "Alex",
          age: 25,
          photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
          bio: "Design researcher, filter coffee enthusiast, and weekend cyclist.",
          cityOrCollege: "London",
          interests: JSON.stringify(["Design", "Coffee", "Cycling", "Cinema"]),
        },
      },
    },
    update: {},
  });
  console.log(`✓ Seeded demo user: ${DEMO_USER_ID}`);

  // 2. Seed mock discoverable users and profiles
  let seededProfilesCount = 0;
  for (const item of SEED_PROFILES) {
    await prisma.user.upsert({
      where: { id: item.userId },
      create: {
        id: item.userId,
        profile: {
          create: {
            name: item.name,
            age: item.age,
            photoUrl: item.photoUrl,
            bio: item.bio,
            cityOrCollege: item.cityOrCollege,
            interests: JSON.stringify(item.interests),
          },
        },
      },
      update: {
        profile: {
          update: {
            name: item.name,
            age: item.age,
            photoUrl: item.photoUrl,
            bio: item.bio,
            cityOrCollege: item.cityOrCollege,
            interests: JSON.stringify(item.interests),
          },
        },
      },
    });
    seededProfilesCount++;
  }
  console.log(`✓ Seeded ${seededProfilesCount} discoverable mock profiles.`);

  // 3. Seed incoming LIKE records from selected users to demo user (8-10 profiles)
  let incomingLikesCount = 0;
  for (const item of SEED_PROFILES) {
    if (item.hasIncomingLike) {
      await prisma.swipe.upsert({
        where: {
          fromUserId_toUserId: {
            fromUserId: item.userId,
            toUserId: DEMO_USER_ID,
          },
        },
        create: {
          fromUserId: item.userId,
          toUserId: DEMO_USER_ID,
          action: "LIKE",
        },
        update: {
          action: "LIKE",
        },
      });
      incomingLikesCount++;
    }
  }
  console.log(`✓ Seeded ${incomingLikesCount} hidden incoming likes to demo user.`);
  console.log("==> Database seed complete!");
}

if (require.main === module) {
  seedDatabase()
    .catch((e) => {
      console.error("Seed error:", e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}
