
class Block {
    constructor(name,author,screen,miniScreen,link,date,cnt,containList,env) {
        this.name = name;
        this.author = author;
        this.screen = screen;
        this.miniScreen = miniScreen;
        this.link = link;
        this.date = date;
        this.cnt = cnt;
        this.containList = containList;
        this.env = env;
    }
}

var InfinityBlocks = [


    new Block(
        "Minecraft",
        "Tomek555",
        "/blockimages/Minecraft.png",
        "/blockimages/mini/Minecraft_mini.png",
        "/blocks/Minecraft.zip",
        "24.05.2018",
        "16",
        [
            'Minecraft16 > Cobblestone',
            'Minecraft16 > Dirt',
            'Minecraft16 > Grass',
            'Minecraft16 > Leaves',
            'Minecraft16 > Plank',
            'Minecraft16 > Sand',
            'Minecraft16 > Stone',
            'Minecraft16 > Wood',
            'Minecraft32 > Cobblestone',
            'Minecraft32 > Dirt',
            'Minecraft32 > Grass',
            'Minecraft32 > Leaves',
            'Minecraft32 > Plank',
            'Minecraft32 > Sand',
            'Minecraft32 > Stone',
            'Minecraft32 > Wood',
        ],
        "any"
    ),
    new Block(
        "TM Logo & Ice Block",
        "Ketrab",
        "/blockimages/TMLogoBlocks.png",
        "/blockimages/mini/TMLogoBlocks_mini.png",
        "/blocks/Ketrab.zip",
        "24.07.2018",
        "3",
        ['TM Logo T','TM Logo M','Stadium Ice Block'],
        "stadium"
    ),
    new Block(
        "Tubes",
        "Ketrab",
        "/blockimages/Tubes.png",
        "/blockimages/mini/Tubes_mini.png",
        "/blocks/Tubes.zip",
        "24.07.2018",
        "62",
        [
            'Simple > Normal',
            'Simple > Checkpoint',
            'Simple > Finish',
            'Simple > Ice',
            'Simple > Boost',
            'Simple > Boost Half',
            'Simple > Freewheeling',
            'Simple > Freewheeling Half',
            'Simple > Mix Boost-Freewheeling',
            'Curve > 1x1',
            'Curve > 2x2',
            'Curve > 3x3',
            'Curve > 4x4',
            'Descent > Simple',
            'Descent > Normal To Descent',
            'Descent > Descent To Normal',
            'Descent > SlopeOne',
            'Descent > BoostUp',
            'Descent > BoostDown',
            'Descent > Freewheeling',
            'Descent > Checkpoint Up',
            'Descent > Checkpoint Down',
            'Descent > Normal To Descent Curve 2x2',
            'Descent > Normal To Descent Curve 2x2 Mirror',
            'Descent > Descent To Normal Curve 2x2',
            'Descent > Descent To Normal Curve 2x2 Mirror',
            'Descent > Normal To Descent Curve 3x3',
            'Descent > Normal To Descent Curve 3x3 Mirror',
            'Descent > Descent To Normal Curve 3x3',
            'Descent > Descent To Normal Curve 3x3 Mirror',
            'Other > SType 2x3',
            'Other > SType 2x3 Mirror',
            'Other > SType 2x4',
            'Other > SType 2x4 Mirror',
            'Other > SType 2x5',
            'Other > SType 2x5 Mirror',
            'Other > Cross Y',
            'Other > Cross X',
            'Other > Cross T',
            'Switch > To Road',
            'Switch > To Circuit',
            'Switch > To Circuit Long',
            'Switch > To Up Ramp 2x2',
            'Switch > Normal To Rotated',
            'Halfpipe > Simple',
            'Halfpipe > Side',
            'Halfpipe > Curve 2x2',
            'Halfpipe > Curve 3x3',
            'Halfpipe > Side Curve 2x2',
            'Halfpipe > To Road',
            'Halfpipe > To Circuit',
            'Dirt > Switch To Dirt',
            'Dirt > Switch Through Dirt',
            'Dirt > Special From Dirt: D',
            'Dirt > Special From Dirt: O',
            'Special > Insider D1',
            'Special > Insider D2',
            'Special > Insider D3',
            'Special > Outsider C1',
            'Special > Outsider C2',
            'Special > To Pillar',
            'Special > Side To Pillar',
        ],
        "stadium"
    ),
    new Block(
        "ESL Titlepack",
        "Tomek",
        "/blockimages/esltitlepack.jpg",
        "/blockimages/mini/esltitlepack_mini.jpg",
        "/blocks/ESLTitlepack.zip",
        "26.07.2018",
        "93",
        [
            'Block0X > Curve 1-5',
            'Block0X > Slope 1-6',
            'Block0X > Slope Transitions 1-4',
            'Block0X > Transition A 1-5',
            'Block0X > Transition B 1-5',
            'Block0X > Transition C 1-3',
            'Block0X > Transition D 1-3',
            '-- where X in {1,2,3}',
        ],
        "stadium"
    ),

    new Block(
        "Trees",
        "Dragere",
        "/blockimages/DragereTrees.png",
        "/blockimages/mini/DragereTrees_mini.png",
        "/blocks/Trees.zip",
        "22.08.2018",
        "3",
        ['Callistemon','JapaneseMaple','Pine'],
        "any"
    ),
    new Block(
        "Circuit Ramps",
        "Dragere",
        "/blockimages/CircuitRamps.png",
        "/blockimages/mini/CircuitRamps_mini.png",
        "/blocks/CircuitRamps.zip",
        "06.09.2018",
        "3",
        ['8th Sphere','Flat To QuaterPipe','Flat To QuaterPipe Mirrored'],
        "stadium"
    ),
    new Block(
        "Portals",
        "Dragere",
        "/blockimages/Portals.png",
        "/blockimages/mini/Portals_mini.png",
        "/blocks/Portals.zip",
        "07.09.2018",
        "2",
        ['Blue','Orange'],
        "any"
    ),
    new Block(
        "Fractured Blocks",
        "Dragere",
        "/blockimages/FracturedBlocks.png",
        "/blockimages/mini/FracturedBlocks_mini.png",
        "/blocks/FracturedBlocks.zip",
        "11.09.2018",
        "3",
        ['f0','f1','f2'],
        "any"
    ),
    new Block(
        "GTA San Andreas Little Props",
        "ElPollo315",
        "/blockimages/GTASALilttleProps.png",
        "/blockimages/mini/GTASALilttleProps_mini.png",
        "/blocks/GTASA_Volume1Blocks_Folder.zip",
        "18.09.2018",
        "24",
        [
            'Industrial Zone > DockBar',
            'Industrial Zone > BusStop',
            'Industrial Zone > Hydrant1',
            'Industrial Zone > Hydrant2',
            'Industrial Zone > MailBox',
            'Industrial Zone > MailBox2',
            'Industrial Zone > ParkMeter',
            'Industrial Zone > Bollard',
            'Industrial Zone > Cone',
            'Kick Stadium > Kick Bus',
            'Kick Stadium > LaFCar1',
            'Kick Stadium > LaFCar2',
            'Kick Stadium > LaFCar3',
            'Kick Stadium > LaFCar4',
            'Kick Stadium > SWPick',
            'Kick Stadium > Bleach',
            'Kick Stadium > KickArse',
            'Kick Stadium > KickRing',
            'Kick Stadium > KickWall',
            'Kick Stadium > KickLoop01',
            'Kick Stadium > KickRamp01',
            'Kick Stadium > KickRamp02',
            'Kick Stadium > KickRamp03',
            'Kick Stadium > KickRamp04'
        ],
        "any"
    ),
    new Block(
        "GTA San Andreas Planes",
        "ElPollo315",
        "/blockimages/GTAVC_2_Planes.png",
        "/blockimages/mini/GTAVC_2_Planes_mini.png",
        "/blocks/GTAVC_2_Planes.zip",
        "19.09.2018",
        "2",
        ['Jumbo','Luxor'],
        "bay"
    ),
    new Block(
        "Speed UFO",
        "St1ngLeR",
        "/blockimages/SpeedUFO.jpg",
        "/blockimages/mini/SpeedUFO_mini.jpg",
        "/blocks/SpeedUFO.zip",
        "14.03.2020",
        "1",
        ['UFO'],
        "desert"
    ),
    new Block(
        "Lighthouse",
        "St1ngLeR",
        "/blockimages/Lighthouse.jpg",
        "/blockimages/mini/Lighthouse_mini.jpg",
        "/blocks/Lighthouse.zip",
        "14.03.2020",
        "1",
        ['Lighthouse'],
        "coast"
    ),
    new Block(
        "Icebreaker",
        "St1ngLeR",
        "/blockimages/Icebreaker.jpg",
        "/blockimages/mini/Icebreaker_mini.jpg",
        "/blocks/Icebreaker.zip",
        "12.05.2020",
        "1",
        ['Icebreaker'],
        "snow"
    ),
    new Block(
        "Balloons",
        "St1ngLeR",
        "/blockimages/Balloons.jpg",
        "/blockimages/mini/Balloons_mini.jpg",
        "/blocks/Balloons.zip",
        "14.05.2020",
        "8",
        ['Skin 1-8'],
        "rally"
    ),
    new Block(
        "Platform To Highway",
        "St1ngLeR",
        "/blockimages/PlatformToHighway.jpg",
        "/blockimages/mini/PlatformToHighway_mini.jpg",
        "/blocks/PlatformToHighway.zip",
        "17.05.2020",
        "2",
        ['Air','Ground'],
        "island"
    ),
    new Block(
        "Circuit Trap",
        "St1ngLeR",
        "/blockimages/Circuit_Trap.jpg",
        "/blockimages/mini/Circuit_Trap_mini.jpg",
        "/blocks/Circuit_Trap.zip",
        "23.05.2020",
        "3",
        ['Air','Ground','Slope'],
        "stadium"
    ),
    new Block(
        "Dirt Road Pillar",
        "St1ngLeR",
        "/blockimages/Dirt_Road_Pillar.jpg",
        "/blockimages/mini/Dirt_Road_Pillar_mini.jpg",
        "/blocks/Dirt_Road_Pillar.zip",
        "23.05.2020",
        "2",
        ['Dirt','Grass'],
        "stadium"
    ),
    new Block(
        "LinuxCat_Blocks",
        "LinuxCat",
        "",
        "",
        "/blocks/LinuxCat_Blocks.zip",
        "2.11.2020",
        "0",
        [],
        "any"
    ),
    new Block(
        "Sausage Roads",
        "St1ngLeR",
        "/blockimages/Sausage.png",
        "/blockimages/mini/Sausage_mini.png",
        "/blocks/sausage1.zip",
        "17.04.2021",
        "3",
        ['Corner','Normal To Sausage','Straight'],
        "stadium"
    ),
    new Block(
        "Grid Platforms",
        "St1ngLeR",
        "/blockimages/GridPlatforms.png",
        "/blockimages/mini/GridPlatforms_mini.png",
        "/blocks/Grid_Platforms.zip",
        "17.04.2021",
        "7",
        [
            'Pillars > Pillar',
            'Pillars > Pillar Base',
            'Platforms > Base',
            'Platforms > Free Wheeling',
            'Platforms > Slope',
            'Platforms > Turbo',
            'Platforms > Turbo Roulette',
        ],
        "stadium"
    ),
    new Block(
        "Holes",
        "St1ngLeR",
        "/blockimages/Holes.png",
        "/blockimages/mini/Holes_mini.png",
        "/blocks/Holes.zip",
        "17.04.2021",
        "5",
        [
            'Hole 30 Degrees',
            'Roulette Tubro Hole Air',
            'Roulette Tubro Hole Ground',
            'Turbo Hole Air',
            'Turbo Hole Ground',
        ],
        "stadium"
    ),
    new Block(
        "Ramps",
        "St1ngLeR",
        "/blockimages/Ramps.png",
        "/blockimages/mini/Ramps_mini.png",
        "/blocks/Stadium_Fabric_Ramps.zip",
        "18.04.2021",
        "4",
        ['Fabric Ramp 1-4'],
        "stadium"
    ),
    new Block(
        "Stadium Platform Loop-Start-Corner",
        "St1ngLeR",
        "/blockimages/StadiumPlatformLoopStartCorner.png",
        "/blockimages/mini/StadiumPlatformLoopStartCorner_mini.png",
        "/blocks/StadiumPlatformLoopStartCorner.zip",
        "28.06.2021",
        "1",
        ['Stadium Platform Loop-Start-Corner'],
        "stadium"
    ),
    new Block(
        "Coconut Mall (Scenery)",
        "LinuxCat",
        "/blockimages/CoconutMall.png",
        "/blockimages/mini/CoconutMall_mini.png",
        "/blocks/Coconut_Mall.zip",
        "02.07.2021",
        "1",
        ['Coconut Mall - Mariocart'],
        "any"
    ),
    new Block(
        "Numbers",
        "LinuxCat",
        "/blockimages/Numbers.png",
        "/blockimages/mini/Numbers_mini.png",
        "/blocks/Numbers.zip",
        "06.07.2021",
        "80",
        [
            'Black > 1-9',
            'Blue > 1-9',
            'Forest > 1-9',
            'Green > 1-9',
            'Grey > 1-9',
            'Orange > 1-9',
            'Red > 1-9',
            'White > 1-9',
            'Zeros > All colors',
        ],
        "any"
    ),
    new Block(
        "Ice Road",
        "LinuxCat",
        "/blockimages/IceRoad.png",
        "/blockimages/mini/IceRoad_mini.png",
        "/blocks/IceRoad.zip",
        "16.11.2021",
        "6",
        [
            'Ice Road Straight',
            'Ice Road Curve 2',
            'Ice Road Curve 3',
            'Ice Road Curve 4',
            'Ice Road Curve 5',
            'Red Turbo',
        ],
        "stadium"
    ),
    new Block(
        "Platforms",
        "LinuxCat",
        "/blockimages/Platforms.png",
        "/blockimages/mini/Platforms_mini.png",
        "/blocks/Platforms.zip",
        "16.11.2021",
        "5",
        [
            'Dirt Block',
            'Grass block',
            'Ice block',
            'Water block',
            'Red Turbo',
        ],
        "stadium"
    ),
    new Block(
        "Bay Buildings (Scenery)",
        "St1ngLeR",
        "/blockimages/BayBuildings.png",
        "/blockimages/mini/BayBuildings_mini.png",
        "/blocks/BayBuildings.zip",
        "18.01.2022",
        "1",
        [
            'Bay Buildings',
        ],
        "any"
    ),
    new Block(
        "Hole Ramp",
        "RandoMan",
        "/blockimages/RandoMan_Hole_Ramp.png",
        "/blockimages/mini/RandoMan_Hole_Ramp_mini.png",
        "/blocks/RandoMan_Hole_Ramp.zip",
        "20.05.2022",
        "3",
        [
            'Code Road',
            'Flat to Vertical Arena',
            'Hole Ramp',
        ],
        "stadium"
    ),
    new Block(
        "Slope Staircase",
        "RandoMan",
        "/blockimages/RandoMan_Slope_Staircase.png",
        "/blockimages/mini/RandoMan_Slope_Staircase_mini.png",
        "/blocks/RandoMan_Slope_Staircase.zip",
        "20.05.2022",
        "2",
        [
            'Slope Staircase',
            'Staircase',
        ],
        "stadium"
    ),
    new Block(
        "Thin Ramp",
        "RandoMan",
        "/blockimages/RandoMan_Hole_Ramp.png",
        "/blockimages/mini/RandoMan_Hole_Ramp_mini.png",
        "/blocks/RandoMan_Thin_Ramp.zip",
        "20.05.2022",
        "1",
        [
            'Thin Ramp',
        ],
        "stadium"
    ),
    new Block(
        "Slope To Quarter",
        "RandoMan",
        "/blockimages/RandoMan_Slope_To_Quarter.png",
        "/blockimages/mini/RandoMan_Slope_To_Quarter_mini.png",
        "/blocks/RandoMan_Slope_To_Quarter.zip",
        "20.05.2022",
        "1",
        [
            'Arena Slope to Quarter',
        ],
        "stadium"
    ),
    new Block(
        "Navara (Scenery)",
        "RandoMan",
        "/blockimages/RandoMan_Navara.png",
        "/blockimages/mini/RandoMan_Navara_mini.png",
        "/blocks/RandoMan_Navara.zip",
        "25.05.2022",
        "1",
        [
            'Navara',
        ],
        "any"
    ),
    new Block(
        "TM2020 Pipes",
        "Celyan",
        "/blockimages/tm2020pipes.png",
        "/blockimages/mini/tm2020pipes_mini.png",
        "/blocks/tm2020pipes.zip",
        "05.05.2023",
        "12",
        [
            'StructureBaseAir',
            'StructureCornerAir',
            'StructureCrossAir',
            'StructureDeadendAir',
            'StructureStraightAir',
            'StructureTShapedAir',
            'StructureBaseGrass',
            'StructureCornerGrass',
            'StructureCrossGrass',
            'StructureDeadendGrass',
            'StructureStraightGrass',
            'StructureTShapedGrass',
        ],
        "stadium"
    ),
    new Block(
        "Stripes",
        "Celyan",
        "/blockimages/Stripes.jpg",
        "/blockimages/mini/Stripes_mini.jpg",
        "/blocks/Stripes.zip",
        "25.07.2023",
        "4",
        [
            'FreeCPPlatform',
            'FreeFinishPlatform',
            'FreeMultilapPlatform',
            'FreeStartPlatform',
        ],
        "stadium"
    ),
    new Block(
        "Slope To Quarter Pipe",
        "Chillaxe",
        "/blockimages/Chillaxe_Slope_To_Quarter_Pipe.png",
        "/blockimages/mini/Chillaxe_Slope_To_Quarter_Pipe_mini.png",
        "/blocks/Chillaxe_Slope_To_Quarter_Pipe.zip",
        "20.09.2023",
        "1",
        [
            'Slope To Quarter Pipe'
        ],
        "stadium"
    ),
<<<<<<< 0ad48867e3e05ea881c4e9df4e089fbb838a2d87
<<<<<<< 0ad48867e3e05ea881c4e9df4e089fbb838a2d87
=======
=======
>>>>>>> RPGPack
	new Block(
        "RPG TitlePack",
        "Celyan",
        "/blockimages/RPGPack.png",
        "/blockimages/mini/RPGPack_mini.png",
<<<<<<< 0ad48867e3e05ea881c4e9df4e089fbb838a2d87
        "https://drive.google.com/file/d/1gLo_1Ee3EjZGXD9sEw8HaW466hXunjzN/view",
=======
        "/blocks/RPGPack.rar",
>>>>>>> RPGPack
        "7.10.2023",
        "200",
        [
            'Wall',
            'Window',
			'Frame',
			'Plat',
			'PLMatch',
			'PLR',
			'PLRT'
        ],
        "any"
    ),
<<<<<<< 0ad48867e3e05ea881c4e9df4e089fbb838a2d87
>>>>>>> fix link
=======
>>>>>>> RPGPack
];
