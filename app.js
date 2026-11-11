/* ==========================================================================
   Divine Connection Ministries Worldwide - Divine Encounter 40
   Interactive Application Script
   ========================================================================== */

// --- 40-Day Prayer Guide Data ---
const devotionalData = [
  // Phase 1: Consecration & Foundation (Days 1-10)
  {
    day: 1,
    phase: 1,
    phaseName: "Foundations & Consecration",
    title: "Sanctifying the Altar of Your Heart",
    scripture: "Joshua 3:5 — 'Sanctify yourselves, for tomorrow the Lord will do wonders among you.'",
    focus: "Repentance, self-examination, and dedicating spirit, soul, and body to God.",
    prayerPoints: [
      "Father, wash me thoroughly from all iniquity and purge me with hyssop (Psalm 51:7).",
      "I surrender my mind, emotions, and physical appetites completely to the Lord Jesus Christ.",
      "Holy Spirit, set a guard over my lips and align my heart with heaven's frequency for these 40 days."
    ],
    declaration: "I am holy, consecrated, and set apart for the supernatural agenda of God in this season."
  },
  {
    day: 2,
    phase: 1,
    phaseName: "Foundations & Consecration",
    title: "Breaking the Power of Unforgiveness & Bitterness",
    scripture: "Mark 11:25 — 'And whenever you stand praying, if you have anything against anyone, forgive him...'",
    focus: "Releasing past hurts, offenses, and receiving the peace of Christ.",
    prayerPoints: [
      "Lord, I release every individual who has betrayed, hurt, or spoken falsely against me.",
      "Root out every seed of bitterness, malice, and resentment lodged within my spirit.",
      "Let the healing balm of Gilead saturate my emotional wounds."
    ],
    declaration: "My heart is free from offense; I walk in unconditional divine love and grace."
  },
  {
    day: 3,
    phase: 1,
    phaseName: "Foundations & Consecration",
    title: "Rebuilding the Broken Altars of Fellowship",
    scripture: "1 Kings 18:30 — 'Then Elijah said to all the people, Come near to me... And he repaired the altar of the Lord that was broken down.'",
    focus: "Restoring intimacy in personal prayer and deep worship.",
    prayerPoints: [
      "Father, revive my secret place and ignite fresh hunger for Your holy presence.",
      "Deliver me from spiritual lethargy, lukewarmness, and mechanical prayer.",
      "Let fire fall upon the sacrifice of my devotion this day."
    ],
    declaration: "The fire on my altar of communion shall never go out; my fellowship with Jesus is burning bright."
  },
  {
    day: 4,
    phase: 1,
    phaseName: "Foundations & Consecration",
    title: "Purging Ancestral and Generational Covenants",
    scripture: "Galatians 3:13 — 'Christ has redeemed us from the curse of the law, having become a curse for us...'",
    focus: "Renouncing inherited spiritual encumbrances through the blood of Jesus.",
    prayerPoints: [
      "By the blood of the Lamb, I revoke every ungodly covenant speaking against my lineage.",
      "Let every ancestral altar contending with my destiny catch fire and be silenced forever.",
      "I establish the covenant of peace, life, and righteousness over my family tree."
    ],
    declaration: "The blood of Jesus speaks better things for me; generational limitations are severed permanently."
  },
  {
    day: 5,
    phase: 1,
    phaseName: "Foundations & Consecration",
    title: "Subduing the Flesh and Carnal Desires",
    scripture: "Romans 8:13 — 'For if you live according to the flesh you will die; but if by the Spirit you put to death the deeds of the body, you will live.'",
    focus: "Overcoming fleshly appetites and walking under the government of the Holy Spirit.",
    prayerPoints: [
      "Holy Spirit, empower me to bring my physical body into subjection during this fast.",
      "Break the stranglehold of addictions, lust, greed, and toxic habits in my lifestyle.",
      "Fill me afresh with the fruit of self-control and spiritual discipline."
    ],
    declaration: "I am dead to sin, but alive to God in Christ Jesus. My flesh is crucified with Christ."
  },
  {
    day: 6,
    phase: 1,
    phaseName: "Foundations & Consecration",
    title: "The Circumcision of the Tongue & Decree",
    scripture: "Proverbs 18:21 — 'Death and life are in the power of the tongue, and those who love it will eat its fruit.'",
    focus: "Purifying speech, canceling negative declarations, and speaking faith-filled decrees.",
    prayerPoints: [
      "Lord, forgive me for every careless, fearful, or faithless word I have spoken.",
      "Touch my tongue with a live coal from Your heavenly altar.",
      "From this day forward, my words carry creative power, healing, and prophetic clarity."
    ],
    declaration: "My words align with heaven's truth. What I decree according to God's word is established unto me."
  },
  {
    day: 7,
    phase: 1,
    phaseName: "Foundations & Consecration",
    title: "Deep Spiritual Discernment & Open Spiritual Senses",
    scripture: "Hebrews 5:14 — '...those who by reason of use have their senses exercised to discern both good and evil.'",
    focus: "Sharpening spiritual eyes, ears, and spiritual intuition.",
    prayerPoints: [
      "Open my eyes, O Lord, that I may see wondrous things out of Your law (Psalm 119:18).",
      "Sharpen my spiritual hearing to recognize Your quiet whisper above earthly noise.",
      "Shield me from deception, false voices, and spiritual confusion."
    ],
    declaration: "My spiritual senses are active and razor-sharp; I hear the voice of the Good Shepherd clearly."
  },
  {
    day: 8,
    phase: 1,
    phaseName: "Foundations & Consecration",
    title: "A Heart of Genuine Humility and Brokenness",
    scripture: "James 4:10 — 'Humble yourselves in the sight of the Lord, and He will lift you up.'",
    focus: "Dethroning pride, ego, and self-reliance to walk in divine meekness.",
    prayerPoints: [
      "Search me, O God, and know my heart; see if there is any wicked or proud way in me.",
      "Deliver me from subtle arrogance, self-promotion, and spiritual superiority.",
      "Clothe me with the garment of genuine humility before God and humanity."
    ],
    declaration: "I boast only in the cross of Jesus Christ; God gives me exceeding grace because I walk in humility."
  },
  {
    day: 9,
    phase: 1,
    phaseName: "Foundations & Consecration",
    title: "Cleansing of the Mind & Mental Fortresses",
    scripture: "Philippians 4:8 — 'Whatever things are true, whatever things are noble, whatever things are just... meditate on these things.'",
    focus: "Casting down toxic thoughts, anxiety, depression, and mental fatigue.",
    prayerPoints: [
      "I overthrow every mental stronghold built by trauma, fear, and negative conditioning.",
      "I put on the helmet of salvation and receive the supernatural mind of Christ.",
      "Let the peace of God which passes all understanding guard my thoughts day and night."
    ],
    declaration: "I have sound judgment, divine tranquility, and the mind of Christ."
  },
  {
    day: 10,
    phase: 1,
    phaseName: "Foundations & Consecration",
    title: "The Covenant Seal of Total Obedience",
    scripture: "Isaiah 1:19 — 'If you are willing and obedient, you shall eat the good of the land.'",
    focus: "Surrendering every delay, excuse, and half-obedience to God's instructions.",
    prayerPoints: [
      "Lord, grant me a willing heart and prompt execution of Your voice.",
      "I reject the spirit of procrastination and stubbornness in spiritual assignments.",
      "Seal my consecration with heavenly approval as I prepare for phase two breakthroughs."
    ],
    declaration: "My obedience is complete; heaven is opening its storehouse of blessings over my life."
  },

  // Phase 2: Warfare & Deliverance (Days 11-20)
  {
    day: 11,
    phase: 2,
    phaseName: "Breaking Strongholds & Deliverance",
    title: "Uprooting Foundations of Spiritual Stagnation",
    scripture: "Jeremiah 1:10 — 'See, I have this day set you over the nations... to root out and to pull down, to build and to plant.'",
    focus: "Demolishing cycles of delay, backwardness, and invisible barriers.",
    prayerPoints: [
      "Every demonic embargo placed on my promotion and advancement, shatter by thunder!",
      "I break out of every circle of wilderness wandering and near-success syndrome.",
      "Let the angel of breakthrough roll away every stone blocking my destiny gates."
    ],
    declaration: "My season of stagnation is terminated. I advance with divine velocity and unstoppable power!"
  },
  {
    day: 12,
    phase: 2,
    phaseName: "Breaking Strongholds & Deliverance",
    title: "Total Deliverance from Affliction & Chronic Sickness",
    scripture: "Nahum 1:9 — 'Affliction will not rise up a second time.'",
    focus: "Healing for body, organs, blood system, and eradication of infirmities.",
    prayerPoints: [
      "By the stripes of Jesus, I curse the root of every chronic ailment and organic malfunction.",
      "Let the resurrecting power of the Holy Spirit infuse my bones, cells, and organs with vitality.",
      "I decree complete immunity against diseases and premature termination."
    ],
    declaration: "Divine health is my covenant inheritance. No sickness or plague can dwell in my tabernacle!"
  },
  {
    day: 13,
    phase: 2,
    phaseName: "Breaking Strongholds & Deliverance",
    title: "Dismantling Financial Curses & Poverty Spirits",
    scripture: "2 Corinthians 8:9 — 'Though He was rich, yet for your sakes He became poor, that you through His poverty might become rich.'",
    focus: "Breaking debt, lack, devourers, and opening supernatural wealth streams.",
    prayerPoints: [
      "I rebuke the devourer over my finances, investments, and work of my hands.",
      "Let the chains of debt, scarcity, and economic oppression melt like wax before fire.",
      "Release heavenly ideas, wealth wisdom, and unexpected favor into my hands."
    ],
    declaration: "I am blessed to be a blessing; my cup overflows with kingdom abundance and generational wealth."
  },
  {
    day: 14,
    phase: 2,
    phaseName: "Breaking Strongholds & Deliverance",
    title: "Deliverance of Marriages, Families & Seed",
    scripture: "Joshua 24:15 — 'As for me and my house, we will serve the Lord.'",
    focus: "Healing broken marital relationships, prodigal children, and family peace.",
    prayerPoints: [
      "Every arrow of marital discord, divorce, and misunderstanding, be swallowed by peace.",
      "I arrest every prodigal spirit diverting my children or family members from God's altar.",
      "The peace of God that passes understanding envelops our home in Jesus' name."
    ],
    declaration: "My family belongs to Jesus Christ; our children shall be great in the earth and taught of the Lord."
  },
  {
    day: 15,
    phase: 2,
    phaseName: "Breaking Strongholds & Deliverance",
    title: "Silence the Accuser of the Brethren",
    scripture: "Revelation 12:11 — 'And they overcame him by the blood of the Lamb and by the word of their testimony...'",
    focus: "Overcoming guilt, demonic condemnation, and satanic court verdicts.",
    prayerPoints: [
      "I nullify every satanic subpoena and court accusation filed against my destiny.",
      "The blood of Jesus answers every legal ground the adversary claims against my breakthrough.",
      "Let the righteousness of Christ shine as a breastplate over my soul."
    ],
    declaration: "There is therefore now no condemnation for me. I am justified, redeemed, and victorious in Christ!"
  },
  {
    day: 16,
    phase: 2,
    phaseName: "Breaking Strongholds & Deliverance",
    title: "Breaking Monitoring Spirits & Occult Surveillance",
    scripture: "Isaiah 8:10 — 'Take counsel together, but it will come to nothing; speak the word, but it will not stand, for God is with us.'",
    focus: "Blinding every evil surveillance, familiar spirits, and demonic watchers.",
    prayerPoints: [
      "Let the fire of the Holy Ghost blind every evil mirror and monitoring agent assigned against me.",
      "I cover my movements, prayers, and family with the thick cloud of God's glory.",
      "Every gathering of darkness against my rising, scatter in seven directions!"
    ],
    declaration: "I dwell in the secret place of the Most High; I am invisible to darkness and visible to divine favor!"
  },
  {
    day: 17,
    phase: 2,
    phaseName: "Breaking Strongholds & Deliverance",
    title: "Recovery of Lost Years & Stolen Virtues",
    scripture: "Joel 2:25 — 'So I will restore to you the years that the swarming locust has eaten...'",
    focus: "Supernatural restitution of wasted time, missed opportunities, and stolen potential.",
    prayerPoints: [
      "Father, release a seven-fold recompense for every opportunity stolen by the enemy.",
      "Let divine acceleration overtake past years of delay and sorrow.",
      "I recover every prophetic virtue and blessing hijacked in the realm of the spirit."
    ],
    declaration: "My lost years are restored! My latter end shall be seven times greater than my beginning!"
  },
  {
    day: 18,
    phase: 2,
    phaseName: "Breaking Strongholds & Deliverance",
    title: "Releasing Angelic Reinforcements & Heavenly Armies",
    scripture: "Hebrews 1:14 — 'Are they not all ministering spirits sent forth to minister for those who will inherit salvation?'",
    focus: "Engaging ministering angels on behalf of assignments, safety, and supply.",
    prayerPoints: [
      "I deploy warfaring angels to overturn every wicked resistance in my territorial space.",
      "Angels of provision and breakthrough, locate me and dispatch heavenly resources today.",
      "Let an encampment of flaming angels surround my residence and loved ones 24/7."
    ],
    declaration: "The armies of heaven fight for me. Those who are with me are greater than those in the world!"
  },
  {
    day: 19,
    phase: 2,
    phaseName: "Breaking Strongholds & Deliverance",
    title: "Shattering Curses of Near-Success Syndrome",
    scripture: "Deuteronomy 28:13 — 'And the Lord will make you the head and not the tail; you shall be above only, and not be beneath...'",
    focus: "Crossing the finish line into breakthrough without last-minute abortion of miracles.",
    prayerPoints: [
      "Every spirit of 'almost made it' that operates at the verge of my breakthrough, die by fire!",
      "I shall not labor for others to harvest; my expectations will not be cut short.",
      "I cross the threshold from labor into supernatural celebration!"
    ],
    declaration: "My miracles will not miscarry. I finish strong and celebrate total victory in Jesus' name!"
  },
  {
    day: 20,
    phase: 2,
    phaseName: "Breaking Strongholds & Deliverance",
    title: "Victory at the Midpoint: The Shouting of Grace",
    scripture: "Zechariah 4:7 — 'He shall bring forth the capstone with shouts of Grace, grace to it!'",
    focus: "Thanksgiving for midway triumphs and sealing victories won in the first 20 days.",
    prayerPoints: [
      "Lord, I thank You for every invisible battle won and every yoke dismantled.",
      "I shout grace over every mountain standing before me; become a plain right now!",
      "I receive supernatural endurance to run the second half of this 40-day encounter."
    ],
    declaration: "Grace speaks for me! What started in tears is culminating in unending joy and victory!"
  },

  // Phase 3: Favor & Open Heavens (Days 21-30)
  {
    day: 21,
    phase: 3,
    phaseName: "Favor, Restoration & Open Heavens",
    title: "Entering the Realm of Unmerited Favor",
    scripture: "Psalm 5:12 — 'For You, O Lord, will bless the righteous; with favor You will surround him as with a shield.'",
    focus: "Favor with God and men, opened doors, and unexpected royal access.",
    prayerPoints: [
      "Father, perfume my life with the aroma of divine favor that opens locked doors.",
      "Let kings, decision-makers, and destiny helpers show me exceptional kindness.",
      "Turn disadvantage into glorious advantage for my sake."
    ],
    declaration: "I am clothed with favor like a royal garment. Everywhere my feet tread, doors fly open!"
  },
  {
    day: 22,
    phase: 3,
    phaseName: "Favor, Restoration & Open Heavens",
    title: "The Release of Strategic Destiny Helpers",
    scripture: "1 Chronicles 12:22 — 'For at that time they came to David day by day to help him, until it was a great army...'",
    focus: "Connecting with divinely ordained mentors, partners, sponsors, and supporters.",
    prayerPoints: [
      "Holy Spirit, summon my destiny helpers from the north, south, east, and west.",
      "Remove every veil of obscurity that prevents key people from identifying my value.",
      "Disconnect me from destiny destroyers and time wasters."
    ],
    declaration: "My destiny helpers are awake; they will not sleep until they perform God's counsel concerning me."
  },
  {
    day: 23,
    phase: 3,
    phaseName: "Favor, Restoration & Open Heavens",
    title: "Supernatural Wisdom & Problem-Solving Insight",
    scripture: "Daniel 5:12 — 'Inasmuch as an excellent spirit, knowledge, understanding, interpreting dreams, solving riddles... were found in this Daniel.'",
    focus: "Receiving divine intellect, creative solutions, and heavenly strategy.",
    prayerPoints: [
      "Baptize my intellect with kingdom wisdom superior to worldly philosophy.",
      "Grant me insights into complex problems in my career, ministry, and business.",
      "Let the Spirit of counsel and might rest upon me continually."
    ],
    declaration: "I operate with the mind of Christ and the spirit of excellence; my solutions command respect."
  },
  {
    day: 24,
    phase: 3,
    phaseName: "Favor, Restoration & Open Heavens",
    title: "Open Heavens & the Dew of Hermon",
    scripture: "Ezekiel 1:1 — 'Now it came to pass... as I was among the captives by the River Chebar, that the heavens were opened and I saw visions of God.'",
    focus: "Living under an unhindered spiritual atmosphere of continuous revelation and supply.",
    prayerPoints: [
      "I decree my personal heavens are permanently open; brass heavens are shattered!",
      "Let fresh prophetic revelations and heavenly directions flood my spirit daily.",
      "Pour down the rain of righteousness, blessing, and fruitful harvest upon my land."
    ],
    declaration: "I live under open heavens. Drought and famine have no place in my dwelling."
  },
  {
    day: 25,
    phase: 3,
    phaseName: "Favor, Restoration & Open Heavens",
    title: "Kingdom Prosperity & Marketplace Dominance",
    scripture: "Deuteronomy 8:18 — 'And you shall remember the Lord your God, for it is He who gives you power to get wealth...'",
    focus: "Unlocking kingdom enterprise, professional leadership, and ethical wealth.",
    prayerPoints: [
      "Lord, release upon my hands the power to generate righteous wealth for kingdom advancement.",
      "Grant me innovative business concepts, patents, and fruitful investments.",
      "Make me a pillar of kingdom philanthropy and missionary sponsorship."
    ],
    declaration: "Wealth and riches shall be in my house; I am blessed in the city and blessed in the field."
  },
  {
    day: 26,
    phase: 3,
    phaseName: "Favor, Restoration & Open Heavens",
    title: "The Restoration of Forgotten Promises & Prophecies",
    scripture: "Habakkuk 2:3 — 'For the vision is yet for an appointed time; but at the end it will speak, and it will not lie.'",
    focus: "Resurrecting dormant prophecies and long-awaited promises.",
    prayerPoints: [
      "I call forth every prophetic word spoken over my destiny that has been delayed.",
      "Let every buried vision receive the breath of the Almighty and come alive now!",
      "I stand on the integrity of God's word; not one good thing promised shall fail."
    ],
    declaration: "What God promised me will not die unfulfilled. My eyes will see its magnificent manifestation!"
  },
  {
    day: 27,
    phase: 3,
    phaseName: "Favor, Restoration & Open Heavens",
    title: "Divine Health, Longevity & Preservation",
    scripture: "Psalm 91:16 — 'With long life I will satisfy him, and show him My salvation.'",
    focus: "Covenant of long life, vitality, peace of mind, and divine immunity.",
    prayerPoints: [
      "I renounce untimely death, accidental tragedy, and sudden destruction.",
      "My strength is renewed daily like the eagle's; my youth is revitalized.",
      "I fulfill the full number of my days in joy, health, and spiritual vibrancy."
    ],
    declaration: "I shall not die, but live, and declare the works of the Lord in the land of the living!"
  },
  {
    day: 28,
    phase: 3,
    phaseName: "Favor, Restoration & Open Heavens",
    title: "A Fruitful Vine & Supernatural Enlargement",
    scripture: "Isaiah 54:2 — 'Enlarge the place of your tent, and let them stretch out the curtains of your dwellings...'",
    focus: "Expanding capacity, influence, spiritual territory, and global reach.",
    prayerPoints: [
      "Father, enlarge my coast; let Your hand be with me and keep me from all evil.",
      "Stretch my spiritual and professional capacity to accommodate larger kingdom assignments.",
      "Break limitations of smallness, fear of visibility, and self-doubt."
    ],
    declaration: "I expand on the right hand and on the left. My borders are enlarged by sovereign grace."
  },
  {
    day: 29,
    phase: 3,
    phaseName: "Favor, Restoration & Open Heavens",
    title: "Vindication & Divine Judgment on Adversaries",
    scripture: "Isaiah 54:17 — 'No weapon formed against you shall prosper, and every tongue which rises against you in judgment you shall condemn.'",
    focus: "Public vindication, overturning false narratives, and victory over slander.",
    prayerPoints: [
      "Lord, step into my battles and let Your truth silence every lying witness.",
      "Turn the counsel of Ahithophel into utter foolishness.",
      "Vindicate me openly and let Your glory put my mockers to joyful shame."
    ],
    declaration: "God is my righteous judge and defender. No weapon forged against me shall ever prosper."
  },
  {
    day: 30,
    phase: 3,
    phaseName: "Favor, Restoration & Open Heavens",
    title: "Entering the Outer Court of Prophetic Fire",
    scripture: "Leviticus 6:13 — 'A fire shall always be burning on the altar; it shall never go out.'",
    focus: "Thanksgiving for Phase 3 and girding up our loins for the final 10 days of fire.",
    prayerPoints: [
      "Thank You Lord for opening heavens, releasing favor, and restoring dignity.",
      "Lord, intensify the spiritual heat; I am ready for the climax of the final 10 days.",
      "Let the fire of Pentecost fall freshly upon my vessel."
    ],
    declaration: "I step into the final stretch with holy passion, unwavering faith, and supernatural vigor!"
  },

  // Phase 4: Fresh Fire & Dominion (Days 31-40)
  {
    day: 31,
    phase: 4,
    phaseName: "Fresh Fire & Apostolic Dominion",
    title: "Baptism of Fresh Fire & the Anointing",
    scripture: "Acts 1:8 — 'But you shall receive power when the Holy Spirit has come upon you; and you shall be witnesses to Me...'",
    focus: "Enduement of power, holy fire, and supernatural boldness for kingdom impact.",
    prayerPoints: [
      "Holy Spirit, fall upon me as on the Day of Pentecost with fresh holy fire!",
      "Burn away all fear, timidity, and human reluctance to declare the Gospel.",
      "Release raw signs, wonders, and miraculous manifestations through my hands."
    ],
    declaration: "I am baptized with the Holy Ghost and with fire! Power belongs to God and operates through me!"
  },
  {
    day: 32,
    phase: 4,
    phaseName: "Fresh Fire & Apostolic Dominion",
    title: "Apostolic Authority Over Territorial Spirits",
    scripture: "Luke 10:19 — 'Behold, I give you the authority to trample on serpents and scorpions, and over all the power of the enemy...'",
    focus: "Dominion in your city, workplace, neighborhood, and global community.",
    prayerPoints: [
      "I enforce Christ's victory over the prince of the power of the air in my jurisdiction.",
      "Let the light of Jesus pierce the darkness in my city, school, and government.",
      "I establish the throne of Jesus Christ wherever my influence reaches."
    ],
    declaration: "Nothing shall by any means hurt me. I rule and reign as an ambassador of the King of Kings!"
  },
  {
    day: 33,
    phase: 4,
    phaseName: "Fresh Fire & Apostolic Dominion",
    title: "Prophetic Utterance & Mountain-Moving Faith",
    scripture: "Mark 11:23 — 'For assuredly, I say to you, whoever says to this mountain, Be removed and be cast into the sea... he will have whatever he says.'",
    focus: "Activating prophetic decrees that dissolve age-old obstacles instantly.",
    prayerPoints: [
      "I speak to every immovable mountain in my pathway: Be cast into the sea now!",
      "Ignite an unwavering faith in my heart that laughs at impossibilities.",
      "My mouth becomes the pen of a ready writer establishing heaven's decrees on earth."
    ],
    declaration: "I do not walk by sight; I walk by supernatural faith. Impossibilities bow before the name of Jesus!"
  },
  {
    day: 34,
    phase: 4,
    phaseName: "Fresh Fire & Apostolic Dominion",
    title: "Spiritual Gifts Activation & Prophetic Dreams",
    scripture: "1 Corinthians 12:7 — 'But the manifestation of the Spirit is given to each one for the profit of all.'",
    focus: "Unlocking gifts of healing, prophecy, tongues, word of knowledge, and faith.",
    prayerPoints: [
      "Lord, stir up the dormant spiritual gifts within my life (2 Timothy 1:6).",
      "Give me dreams, visions, and prophetic revelations that save lives and build the Church.",
      "Use me as an accurate, sanctified instrument for the edification of the Body of Christ."
    ],
    declaration: "The gifts and calling of God are operating in me with purity, humility, and great accuracy."
  },
  {
    day: 35,
    phase: 4,
    phaseName: "Fresh Fire & Apostolic Dominion",
    title: "Global Harvest of Souls & Missionary Mandate",
    scripture: "Psalm 2:8 — 'Ask of Me, and I will give You the nations for Your inheritance, and the ends of the earth for Your possession.'",
    focus: "Intercession for unreached people groups, salvation of lost souls, and revival in nations.",
    prayerPoints: [
      "Lord of the harvest, send forth laborers into every dark corner of the earth.",
      "Let a sweeping wave of revival hit Divine Connection Ministries Worldwide and all partner churches.",
      "Grant me passion and practical wisdom to win souls daily for Jesus Christ."
    ],
    declaration: "I am a soul winner. I carry God's heartbeat for the nations, and millions shall be saved through our prayers!"
  },
  {
    day: 36,
    phase: 4,
    phaseName: "Fresh Fire & Apostolic Dominion",
    title: "Uncommon Mantles & Double Portion Impartation",
    scripture: "2 Kings 2:9 — 'And Elisha said, Please let a double portion of your spirit be upon me.'",
    focus: "Inheriting apostolic mantles, ministerial stamina, and prophetic grace.",
    prayerPoints: [
      "Father, let the mantle of power, purity, and prayer rest heavily upon my life.",
      "Grant me the spiritual capacity to carry double honor, double grace, and double authority.",
      "Preserve me from moral shipwreck and keep me steadfast till the coming of Christ."
    ],
    declaration: "I wear the garment of power and righteousness. The grace of God on my life is multiplying exponentially."
  },
  {
    day: 37,
    phase: 4,
    phaseName: "Fresh Fire & Apostolic Dominion",
    title: "Consecration for Kingdom Stewardship & Giving",
    scripture: "Luke 6:38 — 'Give, and it will be given to you: good measure, pressed down, shaken together, and running over...'",
    focus: "A generous heart that funds the Gospel and blesses the poor and needy.",
    prayerPoints: [
      "Deliver me from the spirit of greed, hoarding, and fear of lack.",
      "Position me to be a major financier of the Gospel across the nations.",
      "As I sow seeds of faith, let an endless harvest of favor chase me down."
    ],
    declaration: "I am a cheerful, faithful kingdom giver. My seed produces miraculous harvests without delay."
  },
  {
    day: 38,
    phase: 4,
    phaseName: "Fresh Fire & Apostolic Dominion",
    title: "Establishing Perpetual Victory & Covenant Shields",
    scripture: "Exodus 17:15 — 'And Moses built an altar and called its name, The-Lord-Is-My-Banner.'",
    focus: "Sealing permanent victories so the enemy cannot reclaim ground after the fast.",
    prayerPoints: [
      "Every blessing, healing, and victory received during Divine Encounter 40 is sealed with the blood of Jesus!",
      "I decree that the gates of hell shall never prevail against my spiritual advancement.",
      "Jehovah Nissi, be my eternal defense and fortress throughout this year and beyond."
    ],
    declaration: "My victory is permanent and irreversible! No devil can steal what God has bestowed upon me!"
  },
  {
    day: 39,
    phase: 4,
    phaseName: "Fresh Fire & Apostolic Dominion",
    title: "The Great Solemn Assembly & High Praises",
    scripture: "Psalm 149:6 — 'Let the high praises of God be in their mouth, and a two-edged sword in their hand.'",
    focus: "High praise, prophetic dance, joy unspeakable, and spiritual jubilation.",
    prayerPoints: [
      "I lift the high praises of God for answered prayers, supernatural visitations, and miraculous deliverance!",
      "Let my praises dismantle the remaining walls of Jericho in my family and nation.",
      "I put on the garment of praise for the spirit of heaviness."
    ],
    declaration: "My mouth is filled with laughter and my tongue with singing. The Lord has done great things for us!"
  },
  {
    day: 40,
    phase: 4,
    phaseName: "Fresh Fire & Apostolic Dominion",
    title: "The Climax: Crowned with Glory and Commissioned",
    scripture: "Isaiah 60:1 — 'Arise, shine; for your light has come! And the glory of the Lord is risen upon you.'",
    focus: "Apostolic commissioning, coronation of glory, and walking into supernatural destiny.",
    prayerPoints: [
      "Lord, seal these 40 days with an indelible mark of Your glory and divine presence upon my life.",
      "I arise from this sacred mountain transformed, emboldened, and clothed in divine light.",
      "Divine Connection Ministries Worldwide shall flourish, expanding globally with signs, wonders, and mighty conversions."
    ],
    declaration: "I have encountered God! I will never be the same again. I walk forth as a carrier of God's fire, favor, and power into the nations!"
  }
];

// --- Initialize State ---
let currentSelectedDay = 1;
let currentPhaseTab = 1;
let audioContext = null;
let ambientOscillators = [];
let isAudioPlaying = false;
let currentLanguage = localStorage.getItem("de40_language") || "en";

// --- DOM Content Loaded ---
document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  setupTracker();
  setupRegistration();
  setupPrayerRequest();
  setupFAQ();
  setupMobileMenu();
  setupAudioSynth();
  setupSmoothScroll();
  setLanguage(currentLanguage);
});

// --- Language Toggle System (EN / FR) ---
window.setLanguage = function(lang) {
  currentLanguage = (lang === "fr") ? "fr" : "en";
  localStorage.setItem("de40_language", currentLanguage);

  // Update button active states
  document.querySelectorAll(".lang-btn-en").forEach(b => {
    if (currentLanguage === "en") {
      b.classList.add("bg-amber-400", "text-midnight", "shadow-sm");
      b.classList.remove("text-slate-400", "hover:text-white");
    } else {
      b.classList.remove("bg-amber-400", "text-midnight", "shadow-sm");
      b.classList.add("text-slate-400", "hover:text-white");
    }
  });

  document.querySelectorAll(".lang-btn-fr").forEach(b => {
    if (currentLanguage === "fr") {
      b.classList.add("bg-amber-400", "text-midnight", "shadow-sm");
      b.classList.remove("text-slate-400", "hover:text-white");
    } else {
      b.classList.remove("bg-amber-400", "text-midnight", "shadow-sm");
      b.classList.add("text-slate-400", "hover:text-white");
    }
  });

  // Apply translations to all [data-i18n]
  if (typeof translations !== "undefined") {
    const dict = translations[currentLanguage] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach(elem => {
      const key = elem.getAttribute("data-i18n");
      if (dict[key]) {
        elem.innerHTML = dict[key];
      }
    });

    // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
      const key = elem.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        elem.setAttribute("placeholder", dict[key]);
      }
    });
  }

  // Refresh active devotional day
  renderDayGuide(currentSelectedDay);

  // Refresh Tracker
  setupTracker();

  // Audio status text update
  const statusSpan = document.getElementById("audio-status-text");
  if (statusSpan) {
    if (isAudioPlaying) {
      statusSpan.textContent = currentLanguage === "fr" ? "Atmosphère : Active" : "Atmosphere: Playing";
    } else {
      statusSpan.textContent = currentLanguage === "fr" ? "Atmosphère" : "Atmosphere";
    }
  }
};

// --- 1. Countdown Timer & Schedule State ---
const PROGRAM_START = new Date("2026-11-11T08:30:00");
const PROGRAM_END = new Date("2026-12-20T23:59:59");
const ZOOM_URL = "https://us06web.zoom.us/j/7607857923?pwd=HldrhaVs8eEtxfs9OrznJgTyqE088b.1@?";
const YOUTUBE_URL = "https://www.youtube.com/@DivineConnectionMGlobal";

function initCountdown() {
  function updateTimer() {
    const now = new Date();
    const currentTime = now.getTime();
    const startTime = PROGRAM_START.getTime();
    const endTime = PROGRAM_END.getTime();

    const titleElem = document.getElementById("countdown-title-text");

    // Case 1: Before program launch (Nov 11, 2026 08:30 AM)
    if (currentTime < startTime) {
      const difference = startTime - currentTime;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      const pad = (n) => String(n).padStart(2, "0");

      document.getElementById("timer-days").textContent = pad(days);
      document.getElementById("timer-hours").textContent = pad(hours);
      document.getElementById("timer-minutes").textContent = pad(minutes);
      document.getElementById("timer-seconds").textContent = pad(seconds);

      if (titleElem) {
        titleElem.textContent = "Countdown to Sacred Launch (Nov 11, 2026 • 08:30 AM)";
      }
    } 
    // Case 2: Program actively in progress (Nov 11 – Dec 20, 2026)
    else if (currentTime >= startTime && currentTime <= endTime) {
      // Calculate current day of the fast (1 to 40)
      const daysElapsed = Math.floor((currentTime - startTime) / (1000 * 60 * 60 * 24)) + 1;
      const currentFastDay = Math.min(Math.max(daysElapsed, 1), 40);

      // Countdown to next prayer watch
      // Watches daily: 08:30, 17:00, 23:00
      const nowHours = now.getHours();
      const nowMinutes = now.getMinutes();
      const nowTotalMin = nowHours * 60 + nowMinutes;

      let nextWatchName = "Morning Watch (08:30 AM)";
      let nextWatchDate = new Date(now);

      if (nowTotalMin < 8 * 60 + 30) {
        // Next is 08:30 AM today
        nextWatchDate.setHours(8, 30, 0, 0);
        nextWatchName = "Morning Watch (08:30 AM)";
      } else if (nowTotalMin >= 8 * 60 + 30 && nowTotalMin < 12 * 60 + 30) {
        // Morning watch in progress!
        nextWatchDate.setHours(17, 0, 0, 0);
        nextWatchName = "Evening Watch (05:00 PM)";
      } else if (nowTotalMin < 17 * 60) {
        // Next is 5:00 PM today
        nextWatchDate.setHours(17, 0, 0, 0);
        nextWatchName = "Evening Watch (05:00 PM)";
      } else if (nowTotalMin >= 17 * 60 && nowTotalMin < 18 * 60) {
        // Evening watch in progress!
        nextWatchDate.setHours(23, 0, 0, 0);
        nextWatchName = "Midnight Altar of Fire (11:00 PM)";
      } else if (nowTotalMin < 23 * 60) {
        // Next is 11:00 PM today
        nextWatchDate.setHours(23, 0, 0, 0);
        nextWatchName = "Midnight Altar of Fire (11:00 PM)";
      } else {
        // Next is 08:30 AM tomorrow
        nextWatchDate.setDate(nextWatchDate.getDate() + 1);
        nextWatchDate.setHours(8, 30, 0, 0);
        nextWatchName = "Morning Watch (08:30 AM)";
      }

      const diff = nextWatchDate.getTime() - currentTime;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      const pad = (n) => String(n).padStart(2, "0");

      document.getElementById("timer-days").textContent = pad(currentFastDay);
      document.getElementById("timer-hours").textContent = pad(hours);
      document.getElementById("timer-minutes").textContent = pad(minutes);
      document.getElementById("timer-seconds").textContent = pad(seconds);

      const daysLabel = document.querySelector("#timer-days + div");
      if (daysLabel) daysLabel.textContent = "Day Active";

      if (titleElem) {
        titleElem.textContent = `🔥 Day ${currentFastDay} of 40 Live • Next: ${nextWatchName}`;
      }
    } 
    // Case 3: Completed
    else {
      document.getElementById("timer-days").textContent = "40";
      document.getElementById("timer-hours").textContent = "00";
      document.getElementById("timer-minutes").textContent = "00";
      document.getElementById("timer-seconds").textContent = "00";

      if (titleElem) {
        titleElem.textContent = "Divine Encounter 40 Completed in Glory!";
      }
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// --- 2. 40-Day Guide Interactive Browser ---
window.switchPhase = function(phaseNum) {
  currentPhaseTab = phaseNum;
  
  // Update phase tab buttons
  document.querySelectorAll(".phase-btn").forEach(btn => {
    if (parseInt(btn.dataset.phase) === phaseNum) {
      btn.classList.add("active", "border-[#E5A93C]", "bg-gradient-to-r", "from-[#E5A93C]/20", "to-[#7C3AED]/20", "text-[#F6C85F]");
      btn.classList.remove("text-slate-400", "border-white/10");
    } else {
      btn.classList.remove("active", "border-[#E5A93C]", "bg-gradient-to-r", "from-[#E5A93C]/20", "to-[#7C3AED]/20", "text-[#F6C85F]");
      btn.classList.add("text-slate-400", "border-white/10");
    }
  });

  // Calculate start day of that phase: Phase 1: Day 1, Phase 2: Day 11, etc.
  const startDay = (phaseNum - 1) * 10 + 1;
  renderDayGuide(startDay);
  renderPhaseDayPills(phaseNum);
};

function renderPhaseDayPills(phaseNum) {
  const container = document.getElementById("phase-day-pills");
  if (!container) return;
  container.innerHTML = "";

  const start = (phaseNum - 1) * 10 + 1;
  const end = phaseNum * 10;
  const label = currentLanguage === "fr" ? "Jour" : "Day";

  for (let d = start; d <= end; d++) {
    const pill = document.createElement("button");
    pill.className = `day-pill px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
      d === currentSelectedDay ? "active" : ""
    }`;
    pill.setAttribute("data-day", d);
    pill.textContent = `${label} ${d}`;
    pill.onclick = () => renderDayGuide(d);
    container.appendChild(pill);
  }
}

window.renderDayGuide = function(dayNumber) {
  currentSelectedDay = dayNumber;
  const isFr = currentLanguage === "fr";
  const sourceList = (isFr && typeof devotionalData_FR !== "undefined") ? devotionalData_FR : devotionalData;
  const dayData = sourceList.find(d => d.day === dayNumber) || sourceList[0];

  // Update pills active status
  const pillPrefix = isFr ? "Jour" : "Day";
  document.querySelectorAll(".day-pill").forEach(p => {
    if (p.textContent === `${pillPrefix} ${dayNumber}` || p.getAttribute("data-day") == dayNumber) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });

  // Populate card details
  const badgeText = isFr 
    ? `JOUR ${dayData.day} SUR 40 • PHASE ${dayData.phase}`
    : `DAY ${dayData.day} OF 40 • PHASE ${dayData.phase}`;
  document.getElementById("guide-day-badge").textContent = badgeText;
  document.getElementById("guide-phase-name").textContent = dayData.phaseName;
  document.getElementById("guide-day-title").textContent = dayData.title;
  document.getElementById("guide-scripture").textContent = dayData.scripture;
  document.getElementById("guide-focus").textContent = dayData.focus;
  document.getElementById("guide-declaration").textContent = dayData.declaration;

  // Render prayer points list
  const pointsList = document.getElementById("guide-prayer-points");
  pointsList.innerHTML = "";
  dayData.prayerPoints.forEach(point => {
    const li = document.createElement("li");
    li.className = "flex items-start gap-3 text-slate-300 text-sm md:text-base leading-relaxed";
    li.innerHTML = `
      <span class="text-[#E5A93C] mt-1 shrink-0">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
      </span>
      <span>${point}</span>
    `;
    pointsList.appendChild(li);
  });

  // Ensure pills reflect current phase
  renderPhaseDayPills(dayData.phase);
};

window.jumpToDayInput = function(e) {
  const val = parseInt(e.target.value);
  if (val >= 1 && val <= 40) {
    const phase = Math.ceil(val / 10);
    switchPhase(phase);
    renderDayGuide(val);
  }
};

// --- 3. Fasting Tracker ---
function setupTracker() {
  const container = document.getElementById("tracker-grid");
  if (!container) return;

  const saved = JSON.parse(localStorage.getItem("de40_completed_days") || "[]");
  const label = currentLanguage === "fr" ? "Jour" : "Day";

  container.innerHTML = "";
  for (let i = 1; i <= 40; i++) {
    const dayBox = document.createElement("div");
    dayBox.className = `tracker-day ${saved.includes(i) ? "completed" : ""}`;
    dayBox.dataset.day = i;
    dayBox.innerHTML = `
      <span class="text-[10px] tracking-widest text-slate-400 uppercase">${label}</span>
      <span class="text-base font-bold text-white">${i}</span>
      <span class="status-icon text-xs mt-0.5">${saved.includes(i) ? "✓" : "○"}</span>
    `;

    dayBox.addEventListener("click", () => toggleTrackerDay(i));
    container.appendChild(dayBox);
  }

  updateTrackerStats();
}

function toggleTrackerDay(day) {
  let saved = JSON.parse(localStorage.getItem("de40_completed_days") || "[]");
  const isFr = currentLanguage === "fr";
  if (saved.includes(day)) {
    saved = saved.filter(d => d !== day);
    showToast(isFr ? `Jour ${day} décoché.` : `Day ${day} unmarked.`);
  } else {
    saved.push(day);
    showToast(isFr ? `Amen ! Consécration du Jour ${day} enregistrée.` : `Amen! Day ${day} consecration recorded.`);
  }
  localStorage.setItem("de40_completed_days", JSON.stringify(saved));
  setupTracker();
}

function updateTrackerStats() {
  const saved = JSON.parse(localStorage.getItem("de40_completed_days") || "[]");
  const count = saved.length;
  const pct = Math.round((count / 40) * 100);
  const isFr = currentLanguage === "fr";

  const countElem = document.getElementById("tracker-count");
  const barElem = document.getElementById("tracker-bar");
  const msgElem = document.getElementById("tracker-message");

  if (countElem) {
    countElem.textContent = isFr ? `${count} / 40 Jours (${pct}%)` : `${count} / 40 Days (${pct}%)`;
  }
  if (barElem) barElem.style.width = `${pct}%`;

  if (msgElem) {
    if (isFr) {
      if (count === 0) {
        msgElem.textContent = "Commencez votre voyage en cochant chaque journée de jeûne et prière accomplie.";
      } else if (count < 10) {
        msgElem.textContent = "Un départ glorieux ! Gardez le feu spirituel embrasé !";
      } else if (count < 20) {
        msgElem.textContent = "Phase 1 franchie ! Le Seigneur honore votre fidélité !";
      } else if (count < 30) {
        msgElem.textContent = "Plus de la moitié accomplie ! Les cieux s'ouvrent avec faveur !";
      } else if (count < 40) {
        msgElem.textContent = "Dernière ligne droite ! Préparez-vous au couronnement de gloire !";
      } else {
        msgElem.textContent = "Alléluia ! 40 jours accomplis ! Vous êtes couronné(e) de puissance et d'autorité !";
      }
    } else {
      if (count === 0) {
        msgElem.textContent = "Begin your journey by checking off completed days of prayer and fasting.";
      } else if (count < 10) {
        msgElem.textContent = "A glorious start! Keep your spiritual fire burning strong!";
      } else if (count < 20) {
        msgElem.textContent = "Phase 1 conquered! The Lord is honoring your sacrifice!";
      } else if (count < 30) {
        msgElem.textContent = "Over halfway! Open heavens and supernatural favor are breaking loose!";
      } else if (count < 40) {
        msgElem.textContent = "The final stretch! Prepare for the ultimate crowning of glory!";
      } else {
        msgElem.textContent = "Hallelujah! 40 days completed! You are crowned with supernatural power and dominion!";
      }
    }
  }
}

window.resetTracker = function() {
  if (confirm("Do you want to reset your tracked fasting progress?")) {
    localStorage.removeItem("de40_completed_days");
    setupTracker();
    showToast("Progress tracker reset.");
  }
};

// --- 4. Registration & Fasting Pass Modal ---
function setupRegistration() {
  const form = document.getElementById("registration-form");
  if (!form) return;

  // Check if previously registered
  const savedPass = localStorage.getItem("de40_registration_pass");
  if (savedPass) {
    const data = JSON.parse(savedPass);
    const badge = document.getElementById("registered-pill");
    if (badge) {
      badge.classList.remove("hidden");
      badge.textContent = `Registered as ${data.fullName} (#${data.passId})`;
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = document.getElementById("reg-name").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const phone = document.getElementById("reg-phone").value.trim();
    const country = document.getElementById("reg-country").value.trim() || "Global Participant";
    const fastType = document.getElementById("reg-fast-type").value;
    const prayerFocus = document.getElementById("reg-focus").value.trim() || "Divine Breakthrough & Empowerment";

    // Generate Pass ID
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const passId = `DCMW-DE40-${randomId}`;

    const passData = {
      fullName,
      email,
      phone,
      country,
      fastType,
      prayerFocus,
      passId,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    };

    localStorage.setItem("de40_registration_pass", JSON.stringify(passData));

    showPassModal(passData);
    showToast("Praise God! Your registration is confirmed.");

    // Update pill
    const badge = document.getElementById("registered-pill");
    if (badge) {
      badge.classList.remove("hidden");
      badge.textContent = `Registered: ${fullName} (#${passId})`;
    }
  });
}

function showPassModal(data) {
  document.getElementById("pass-name").textContent = data.fullName;
  document.getElementById("pass-id").textContent = data.passId;
  document.getElementById("pass-country").textContent = data.country;
  document.getElementById("pass-fast").textContent = data.fastType;
  document.getElementById("pass-date").textContent = data.date;

  const modal = document.getElementById("pass-modal");
  modal.classList.add("active");
}

window.closePassModal = function() {
  document.getElementById("pass-modal").classList.remove("active");
};

window.viewExistingPass = function() {
  const savedPass = localStorage.getItem("de40_registration_pass");
  if (savedPass) {
    showPassModal(JSON.parse(savedPass));
  } else {
    showToast("No active registration found. Please register below.");
  }
};

window.shareOnWhatsApp = function() {
  const savedPass = localStorage.getItem("de40_registration_pass");
  const isFr = currentLanguage === "fr";
  let name = isFr ? "Bien-aimé(e)" : "Believer";
  let passNumber = "";
  if (savedPass) {
    const parsed = JSON.parse(savedPass);
    name = parsed.fullName;
    passNumber = `\n${isFr ? "ID de Pass :" : "Pass ID:"} ${parsed.passId}`;
  }

  const msgText = isFr
    ? `🔥 Je viens de m'inscrire à DIVINE ENCOUNTER 40 avec Divine Connection Ministries Worldwide !\n\n` +
      `Thème : « CHERCHER DIEU JUSQU'À CE QUE NOUS LE RENCONTRIONS. »\n` +
      `📅 DATES : 11 Novembre 2026 – 20 Décembre 2026 (40 Jours)\n` +
      `⏰ 3 VEILLES QUOTIDIENNES :\n` +
      `• Gloire Matinale : 08h30 – 12h30\n` +
      `• Combat du Crépuscule : 17h00 – 18h00\n` +
      `• Autel de Feu de Minuit : 23h00 – 01h00\n\n` +
      `🎥 LIEN SALLE ZOOM : https://us06web.zoom.us/j/7607857923?pwd=HldrhaVs8eEtxfs9OrznJgTyqE088b.1@?\n` +
      `📺 CHAÎNE YOUTUBE : https://www.youtube.com/@DivineConnectionMGlobal\n` +
      `${passNumber}\n\n` +
      `Rejoignez des milliers d'intercesseurs dans le monde entier ! Inscription 100% Gratuite :`
    : `🔥 I just registered for DIVINE ENCOUNTER 40 with Divine Connection Ministries Worldwide!\n\n` +
      `Theme: “SEEKING GOD UNTIL WE ENCOUNTER HIM.”\n` +
      `📅 DATES: November 11, 2026 – December 20, 2026 (40 Days)\n` +
      `⏰ DAILY PRAYER SHIFTS:\n` +
      `• Morning Watch: 08:30 AM – 12:30 PM\n` +
      `• Twilight Breakthrough: 5:00 PM – 6:00 PM\n` +
      `• Midnight Altar of Fire: 11:00 PM – 1:00 AM\n\n` +
      `🎥 ZOOM LINK: https://us06web.zoom.us/j/7607857923?pwd=HldrhaVs8eEtxfs9OrznJgTyqE088b.1@?\n` +
      `📺 YOUTUBE: https://www.youtube.com/@DivineConnectionMGlobal\n` +
      `${passNumber}\n\n` +
      `Join believers worldwide for 40 days of prayer & fasting! 100% Free Registration:`;

  const msg = encodeURIComponent(msgText);
  window.open(`https://api.whatsapp.com/send?text=${msg}`, "_blank");
};

window.copyZoomLink = function() {
  navigator.clipboard.writeText(ZOOM_URL).then(() => {
    showToast("Zoom link copied to clipboard!");
  }).catch(() => {
    showToast("Zoom Link: https://us06web.zoom.us/j/7607857923?pwd=HldrhaVs8eEtxfs9OrznJgTyqE088b.1@?");
  });
};

window.copyPayPalMeLink = function() {
  const url = "https://paypal.me/DConnectionministrie";
  navigator.clipboard.writeText(url).then(() => {
    showToast(currentLanguage === "fr" ? "Lien PayPal.Me copié dans le presse-papiers !" : "PayPal.Me link copied to clipboard!");
  }).catch(() => {
    showToast(url);
  });
};

window.printPass = function() {
  window.print();
};

// --- 5. Prayer Request Altar ---
function setupPrayerRequest() {
  const form = document.getElementById("prayer-altar-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("prayer-name").value.trim() || "Beloved Saint";
    const request = document.getElementById("prayer-text").value.trim();
    const isConfidential = document.getElementById("prayer-confidential").checked;

    if (!request) {
      showToast("Please enter your prayer request.");
      return;
    }

    // Show confirmation modal
    document.getElementById("prayer-confirm-name").textContent = name;
    document.getElementById("prayer-confirm-modal").classList.add("active");

    form.reset();
    showToast("Your prayer request has been placed on the Holy Altar.");
  });
}

window.closePrayerModal = function() {
  document.getElementById("prayer-confirm-modal").classList.remove("active");
};

// --- 6. Ambient Prayer Audio Generator (Web Audio API Synthesizer) ---
function setupAudioSynth() {
  const btn = document.getElementById("audio-toggle-btn");
  const statusSpan = document.getElementById("audio-status-text");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (!isAudioPlaying) {
      startAmbientSynth();
      isAudioPlaying = true;
      btn.classList.add("bg-[#E5A93C]/20", "text-[#F6C85F]", "border-[#E5A93C]");
      if (statusSpan) statusSpan.textContent = "Atmosphere: Playing";
      showToast("Prayer atmosphere audio activated.");
    } else {
      stopAmbientSynth();
      isAudioPlaying = false;
      btn.classList.remove("bg-[#E5A93C]/20", "text-[#F6C85F]", "border-[#E5A93C]");
      if (statusSpan) statusSpan.textContent = "Atmosphere: Muted";
      showToast("Prayer atmosphere audio muted.");
    }
  });
}

function startAmbientSynth() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioContext) {
      audioContext = new AudioContext();
    }
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // Create celestial soothing chords (D minor / F maj / A minor gentle drone)
    // Frequencies: D3 (146.83 Hz), A3 (220 Hz), F4 (349.23 Hz), C4 (261.63 Hz)
    const freqs = [146.83, 220.00, 261.63, 349.23];

    // Master gain
    const masterGain = audioContext.createGain();
    masterGain.gain.setValueAtTime(0.01, audioContext.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.08, audioContext.currentTime + 3);

    // Warm Low-pass filter
    const filter = audioContext.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(450, audioContext.currentTime);

    ambientOscillators = [];

    freqs.forEach(freq => {
      const osc = audioContext.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, audioContext.currentTime);

      // Subtle detune for shimmer
      osc.detune.setValueAtTime((Math.random() - 0.5) * 8, audioContext.currentTime);

      osc.connect(filter);
      osc.start();
      ambientOscillators.push(osc);
    });

    filter.connect(masterGain);
    masterGain.connect(audioContext.destination);

    ambientOscillators.push(masterGain);
  } catch (err) {
    console.warn("Web Audio not supported or blocked", err);
  }
}

function stopAmbientSynth() {
  if (ambientOscillators.length > 0) {
    ambientOscillators.forEach(node => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch (e) {}
    });
    ambientOscillators = [];
  }
}

// --- 7. FAQ Accordion ---
function setupFAQ() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach(item => {
    const header = item.querySelector(".faq-header");
    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      // Close all
      items.forEach(i => i.classList.remove("active"));
      // If was not active, open
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// --- 8. Mobile Navigation ---
function setupMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

// --- 9. Toast Notifications ---
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="text-[#E5A93C]">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
      </svg>
    </span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// --- 10. Smooth Scroll ---
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}
