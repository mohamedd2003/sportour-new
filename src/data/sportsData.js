export const sportsData = {
  en: [
    {
      id: 'paramotor',
      name: 'Paramotor',
      description: 'Experience the ultimate freedom of flight with paramotoring over Egypt\'s stunning landscapes.',
      fullDescription: 'Paramotoring combines the freedom of paragliding with the reliability of powered flight. Soar over Egypt\'s diverse landscapes, from the Nile Valley to the Red Sea coast, experiencing breathtaking aerial views that few get to witness.',
      price: 1200,
      duration: '3-4 hours',
      difficulty: 'Intermediate',
      groupSize: '1-4 people',
      image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg',
      locations: ['Dahab', 'Luxor', 'Aswan', 'Farafra Oasis'],
      gallery: [
        'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg',
        'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg',
        'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg',
        'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg'
      ],
      includes: ['Professional instructor', 'All safety equipment', 'Insurance coverage', 'Photo/video service'],
      excludes: ['Transportation to site', 'Meals', 'Personal expenses'],
      requirements: ['Minimum age 16', 'Weight limit 120kg', 'Basic fitness level'],
      itinerary: [
        { time: '08:00', activity: 'Meet at base camp and equipment briefing' },
        { time: '09:00', activity: 'Safety training and ground practice' },
        { time: '10:30', activity: 'First flight with instructor' },
        { time: '12:00', activity: 'Break and refreshments' },
        { time: '13:00', activity: 'Solo flight (experienced pilots)' },
        { time: '14:30', activity: 'Landing and debrief' }
      ],
      operator: {
        name: 'Sky Adventures Egypt',
        rating: 4.8,
        experience: '10+ years',
        certifications: ['IPPI Certified', 'Egyptian Aviation Authority'],
        contact: '+20 123 456 789'
      },
      hotels: [
        {
          name: 'Desert Rose Resort',
          rating: 4.5,
          price: 150,
          image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
        },
        {
          name: 'Oasis Lodge',
          rating: 4.2,
          price: 120,
          image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        }
      ]
    },
    {
      id: 'kayaking',
      name: 'Kayaking',
      description: 'Paddle through Egypt\'s pristine waters and discover hidden coves and marine life.',
      fullDescription: 'Explore Egypt\'s magnificent waterways through kayaking adventures that take you to places only accessible by small watercraft. Navigate through mangrove forests, discover secluded beaches, and witness diverse marine ecosystems.',
      price: 350,
      duration: '4-5 hours',
      difficulty: 'Beginner',
      groupSize: '2-8 people',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg',
      locations: ['Red Sea', 'Lake Nasser', 'Marsa Alam', 'Ras Mohammed'],
      gallery: [
        'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg',
        'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
        'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg',
        'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg'
      ],
      includes: ['Kayak and paddle', 'Life jacket', 'Waterproof bag', 'Snorkeling gear', 'Guide'],
      excludes: ['Lunch', 'Transportation', 'Wetsuit'],
      requirements: ['Basic swimming ability', 'Minimum age 12', 'Sun protection recommended'],
      itinerary: [
        { time: '09:00', activity: 'Equipment fitting and safety briefing' },
        { time: '09:30', activity: 'Paddle technique training' },
        { time: '10:00', activity: 'Start kayaking expedition' },
        { time: '12:00', activity: 'Snorkeling break at coral reef' },
        { time: '13:30', activity: 'Return paddle to base' },
        { time: '14:00', activity: 'Equipment return and debrief' }
      ],
      operator: {
        name: 'Red Sea Water Sports',
        rating: 4.7,
        experience: '8+ years',
        certifications: ['PADI Certified', 'Red Sea Environmental Center'],
        contact: '+20 123 456 790'
      },
      hotels: [
        {
          name: 'Coral Beach Resort',
          rating: 4.6,
          price: 180,
          image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
        },
        {
          name: 'Marina Lodge',
          rating: 4.3,
          price: 140,
          image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        }
      ]
    },
    {
      id: 'windsurfing',
      name: 'Wind Surfing',
      description: 'Harness the power of wind and waves in some of the world\'s best windsurfing locations.',
      fullDescription: 'Egypt\'s Red Sea coast offers world-class windsurfing conditions with consistent winds and crystal-clear waters. Whether you\'re a beginner learning the basics or an advanced surfer seeking challenging conditions.',
      price: 450,
      duration: '6 hours',
      difficulty: 'Intermediate',
      groupSize: '1-6 people',
      image: 'https://images.pexels.com/photos/390051/pexels-photo-390051.jpeg',
      locations: ['Dahab', 'El Gouna', 'Hurghada', 'Safaga'],
      gallery: [
        'https://images.pexels.com/photos/390051/pexels-photo-390051.jpeg',
        'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
        'https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg',
        'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg'
      ],
      includes: ['Windsurf board and sail', 'Wetsuit', 'Harness', 'Professional instruction', 'Rescue boat'],
      excludes: ['Meals', 'Transportation', 'Personal insurance'],
      requirements: ['Basic swimming skills', 'Minimum age 14', 'Physical fitness'],
      itinerary: [
        { time: '08:00', activity: 'Equipment setup and wind assessment' },
        { time: '08:30', activity: 'Theory session and safety briefing' },
        { time: '09:30', activity: 'Beach practice - rigging and balance' },
        { time: '11:00', activity: 'Water practice - basic sailing' },
        { time: '13:00', activity: 'Lunch break' },
        { time: '14:00', activity: 'Advanced techniques and free sailing' }
      ],
      operator: {
        name: 'Wind Masters Egypt',
        rating: 4.9,
        experience: '12+ years',
        certifications: ['IWA Certified', 'Egyptian Sailing Federation'],
        contact: '+20 123 456 791'
      },
      hotels: [
        {
          name: 'Windsurf Paradise Resort',
          rating: 4.7,
          price: 200,
          image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
        },
        {
          name: 'Breeze Hotel',
          rating: 4.4,
          price: 160,
          image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        }
      ]
    },
    {
      id: 'kitesurfing',
      name: 'Kite Surfing',
      description: 'Combine the thrill of surfing with the power of kite flying in Egypt\'s perfect conditions.',
      fullDescription: 'Experience the ultimate adrenaline rush with kitesurfing in Egypt\'s premier locations. The consistent winds and flat water conditions make it ideal for both learning and advancing your skills.',
      price: 500,
      duration: '5-6 hours',
      difficulty: 'Advanced',
      groupSize: '1-4 people',
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
      locations: ['El Gouna', 'Dahab', 'Soma Bay', 'Marsa Alam'],
      gallery: [
        'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg',
        'https://images.pexels.com/photos/390051/pexels-photo-390051.jpeg',
        'https://images.pexels.com/photos/2821823/pexels-photo-2821823.jpeg',
        'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg'
      ],
      includes: ['Kite and board', 'Harness and helmet', 'Wetsuit', 'IKO certified instructor', 'Radio communication'],
      excludes: ['Meals', 'Accommodation', 'Travel insurance'],
      requirements: ['Strong swimming ability', 'Minimum age 16', 'Good physical condition'],
      itinerary: [
        { time: '09:00', activity: 'Wind and weather conditions check' },
        { time: '09:30', activity: 'Kite setup and safety systems' },
        { time: '10:30', activity: 'Kite control on land' },
        { time: '12:00', activity: 'Body dragging in water' },
        { time: '14:00', activity: 'Board skills and water start' },
        { time: '15:30', activity: 'Independent practice and feedback' }
      ],
      operator: {
        name: 'Kite Egypt Pro',
        rating: 4.8,
        experience: '9+ years',
        certifications: ['IKO Certified', 'VDWS Certified'],
        contact: '+20 123 456 792'
      },
      hotels: [
        {
          name: 'Kite Beach Resort',
          rating: 4.8,
          price: 220,
          image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
        },
        {
          name: 'Lagoon Hotel',
          rating: 4.5,
          price: 190,
          image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        }
      ]
    },
    {
      id: 'hiking',
      name: 'Hiking',
      description: 'Explore Egypt\'s diverse landscapes on foot, from desert mountains to coastal trails.',
      fullDescription: 'Discover Egypt\'s hidden natural treasures through guided hiking expeditions. From the rugged mountains of Sinai to the unique rock formations of the White Desert.',
      price: 200,
      duration: '8 hours',
      difficulty: 'Moderate',
      groupSize: '4-12 people',
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
      locations: ['Mount Sinai', 'White Desert', 'Colored Canyon', 'Saint Catherine'],
      gallery: [
        'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
        'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
        'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg',
        'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg'
      ],
      includes: ['Professional guide', 'Hiking poles', 'First aid kit', 'Light refreshments', 'Transportation'],
      excludes: ['Hiking boots', 'Personal water bottle', 'Lunch'],
      requirements: ['Good fitness level', 'Proper hiking footwear', 'Minimum age 12'],
      itinerary: [
        { time: '05:00', activity: 'Early morning pickup from hotel' },
        { time: '07:00', activity: 'Arrive at trailhead and briefing' },
        { time: '07:30', activity: 'Begin ascent with guide' },
        { time: '10:00', activity: 'Rest stop with panoramic views' },
        { time: '12:00', activity: 'Reach summit and lunch break' },
        { time: '14:00', activity: 'Descent and return to base' }
      ],
      operator: {
        name: 'Desert Trekking Egypt',
        rating: 4.6,
        experience: '15+ years',
        certifications: ['Mountain Guide Certified', 'Wilderness First Aid'],
        contact: '+20 123 456 793'
      },
      hotels: [
        {
          name: 'Mountain View Lodge',
          rating: 4.3,
          price: 100,
          image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
        },
        {
          name: 'Desert Camp',
          rating: 4.1,
          price: 80,
          image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        }
      ]
    },
    {
      id: 'sandboarding',
      name: 'Sandboarding',
      description: 'Surf the golden dunes of Egypt\'s deserts for an unforgettable adrenaline rush.',
      fullDescription: 'Experience the thrill of sandboarding down Egypt\'s magnificent sand dunes. This desert adventure combines the excitement of snowboarding with the unique beauty of the Sahara.',
      price: 300,
      duration: '4 hours',
      difficulty: 'Beginner',
      groupSize: '2-10 people',
      image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
      locations: ['Siwa Oasis', 'Farafra', 'Great Sand Sea', 'Bahariya Oasis'],
      gallery: [
        'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg',
        'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg',
        'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg',
        'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg'
      ],
      includes: ['Sandboard and wax', 'Safety helmet', 'Desert guide', 'Refreshments', '4WD transportation'],
      excludes: ['Meals', 'Accommodation', 'Personal protective gear'],
      requirements: ['Basic balance skills', 'Minimum age 10', 'Sun protection essential'],
      itinerary: [
        { time: '14:00', activity: 'Pickup and drive to sand dunes' },
        { time: '15:00', activity: 'Equipment fitting and technique demo' },
        { time: '15:30', activity: 'Practice runs on smaller dunes' },
        { time: '16:30', activity: 'Advanced runs on big dunes' },
        { time: '17:30', activity: 'Sunset viewing and photos' },
        { time: '18:00', activity: 'Return journey begins' }
      ],
      operator: {
        name: 'Sahara Adventures',
        rating: 4.5,
        experience: '7+ years',
        certifications: ['Desert Safety Certified', 'Tourism Authority Licensed'],
        contact: '+20 123 456 794'
      },
      hotels: [
        {
          name: 'Oasis Desert Resort',
          rating: 4.4,
          price: 130,
          image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
        },
        {
          name: 'Dune Lodge',
          rating: 4.2,
          price: 110,
          image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        }
      ]
    },
    {
      id: 'rowing',
      name: 'Rowing',
      description: 'Navigate Egypt\'s historic waterways and experience the tranquility of rowing.',
      fullDescription: 'Row through Egypt\'s historic waterways where pharaohs once sailed. Experience the peaceful rhythm of rowing while taking in ancient temples and traditional villages.',
      price: 250,
      duration: '3 hours',
      difficulty: 'Beginner',
      groupSize: '2-8 people',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
      locations: ['Nile River', 'Lake Nasser', 'Aswan', 'Luxor'],
      gallery: [
        'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
        'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg',
        'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg',
        'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg'
      ],
      includes: ['Rowing boat and oars', 'Life jackets', 'Experienced guide', 'Water and snacks'],
      excludes: ['Meals', 'Hotel pickup', 'Gratuities'],
      requirements: ['Basic swimming ability', 'Minimum age 8', 'Comfortable clothing'],
      itinerary: [
        { time: '16:00', activity: 'Meet at riverside dock' },
        { time: '16:15', activity: 'Rowing technique instruction' },
        { time: '16:45', activity: 'Begin peaceful river journey' },
        { time: '17:30', activity: 'Stop at ancient temple site' },
        { time: '18:15', activity: 'Continue rowing with sunset views' },
        { time: '19:00', activity: 'Return to dock' }
      ],
      operator: {
        name: 'Nile River Adventures',
        rating: 4.7,
        experience: '11+ years',
        certifications: ['River Guide Certified', 'CPR/First Aid'],
        contact: '+20 123 456 795'
      },
      hotels: [
        {
          name: 'Nile View Hotel',
          rating: 4.6,
          price: 170,
          image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
        },
        {
          name: 'Riverside Lodge',
          rating: 4.3,
          price: 140,
          image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        }
      ]
    },
    {
      id: 'diving',
      name: 'Diving',
      description: 'Explore the underwater wonders of the Red Sea with world-class diving experiences.',
      fullDescription: 'Dive into the Red Sea\'s crystal-clear waters and discover one of the world\'s most diverse marine ecosystems. From colorful coral reefs to schools of tropical fish.',
      price: 400,
      duration: '6-7 hours',
      difficulty: 'Intermediate',
      groupSize: '2-6 people',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
      locations: ['Sharm El Sheikh', 'Hurghada', 'Marsa Alam', 'Dahab'],
      gallery: [
        'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
        'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg',
        'https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg',
        'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg'
      ],
      includes: ['Full diving equipment', 'PADI certified instructor', 'Boat transportation', 'Lunch onboard'],
      excludes: ['Diving certification course', 'Underwater camera', 'Wetsuit (rental available)'],
      requirements: ['PADI Open Water certification', 'Medical clearance', 'Minimum age 12'],
      itinerary: [
        { time: '08:00', activity: 'Hotel pickup and transfer to marina' },
        { time: '09:00', activity: 'Boat departure and briefing' },
        { time: '10:00', activity: 'First dive at coral reef site' },
        { time: '12:00', activity: 'Surface interval and lunch' },
        { time: '13:30', activity: 'Second dive at different location' },
        { time: '15:30', activity: 'Return to marina and hotel transfer' }
      ],
      operator: {
        name: 'Red Sea Diving Center',
        rating: 4.9,
        experience: '20+ years',
        certifications: ['PADI 5-Star Center', 'SSI Diamond Center'],
        contact: '+20 123 456 796'
      },
      hotels: [
        {
          name: 'Coral Reef Resort',
          rating: 4.8,
          price: 250,
          image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
        },
        {
          name: 'Diving Paradise Hotel',
          rating: 4.6,
          price: 210,
          image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        }
      ]
    },
    {
      id: 'wreckdiving',
      name: 'Wreck Diving',
      description: 'Discover historic shipwrecks and underwater archaeology in the Red Sea.',
      fullDescription: 'Explore fascinating shipwrecks that tell stories of maritime history. The Red Sea hosts some of the world\'s most accessible and well-preserved wrecks.',
      price: 600,
      duration: '8 hours',
      difficulty: 'Advanced',
      groupSize: '2-4 people',
      image: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg',
      locations: ['Ras Mohammed', 'Abu Nuhas', 'Straits of Tiran', 'Brothers Islands'],
      gallery: [
        'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg',
        'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
        'https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg',
        'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg'
      ],
      includes: ['Technical diving equipment', 'Wreck specialist guide', 'Boat charter', 'Emergency oxygen'],
      excludes: ['Advanced certification course', 'Nitrox fills', 'Underwater lights'],
      requirements: ['Advanced Open Water certification', 'Deep diving specialty', 'Minimum 50 logged dives'],
      itinerary: [
        { time: '07:00', activity: 'Early departure to wreck sites' },
        { time: '08:30', activity: 'Arrive at first wreck location' },
        { time: '09:00', activity: 'Detailed wreck briefing and dive plan' },
        { time: '09:30', activity: 'First wreck dive (30-40m depth)' },
        { time: '11:30', activity: 'Surface interval and site history' },
        { time: '13:00', activity: 'Second wreck dive' },
        { time: '15:00', activity: 'Return journey and debrief' }
      ],
      operator: {
        name: 'Technical Diving Egypt',
        rating: 4.9,
        experience: '15+ years',
        certifications: ['TDI Instructor', 'Wreck Diving Specialist'],
        contact: '+20 123 456 797'
      },
      hotels: [
        {
          name: 'Wreck Divers Resort',
          rating: 4.7,
          price: 280,
          image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
        },
        {
          name: 'Technical Diving Lodge',
          rating: 4.5,
          price: 240,
          image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        }
      ]
    }
  ],
  ar: [
    {
      id: 'paramotor',
      name: 'الطيران الشراعي بالمحرك',
      description: 'استمتع بالحرية المطلقة للطيران مع الطيران الشراعي بالمحرك فوق المناظر الطبيعية المذهلة في مصر.',
      fullDescription: 'يجمع الطيران الشراعي بالمحرك بين حرية الطيران الشراعي وموثوقية الطيران بالطاقة. حلق فوق المناظر الطبيعية المتنوعة في مصر، من وادي النيل إلى ساحل البحر الأحمر.',
      price: 1200,
      duration: '3-4 ساعات',
      difficulty: 'متوسط',
      groupSize: '1-4 أشخاص',
      image: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg',
      locations: ['دهب', 'الأقصر', 'أسوان', 'واحة الفرافرة'],
      gallery: [
        'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg',
        'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg',
        'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg',
        'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg'
      ],
      includes: ['مدرب محترف', 'جميع معدات السلامة', 'تغطية التأمين', 'خدمة التصوير'],
      excludes: ['النقل إلى الموقع', 'الوجبات', 'المصروفات الشخصية'],
      requirements: ['الحد الأدنى للعمر 16 سنة', 'حد الوزن 120 كيلو', 'مستوى لياقة أساسي'],
      itinerary: [
        { time: '08:00', activity: 'اللقاء في المعسكر الأساسي وإحاطة المعدات' },
        { time: '09:00', activity: 'تدريب السلامة والممارسة الأرضية' },
        { time: '10:30', activity: 'الطيران الأول مع المدرب' },
        { time: '12:00', activity: 'استراحة ومرطبات' },
        { time: '13:00', activity: 'الطيران المنفرد (للطيارين ذوي الخبرة)' },
        { time: '14:30', activity: 'الهبوط والمناقشة' }
      ],
      operator: {
        name: 'مغامرات السماء مصر',
        rating: 4.8,
        experience: '10+ سنوات',
        certifications: ['معتمد IPPI', 'هيئة الطيران المصرية'],
        contact: '+20 123 456 789'
      },
      hotels: [
        {
          name: 'منتجع الوردة الصحراوية',
          rating: 4.5,
          price: 150,
          image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'
        },
        {
          name: 'نزل الواحة',
          rating: 4.2,
          price: 120,
          image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
        }
      ]
    }
    // ... (other Arabic sports data would follow the same pattern)
  ]
};