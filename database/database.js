const db = [
  {
    name: 'Hydrogen',
    symbol: 'H',
    category: 'Nonmetal', 
    atomicNumberZ: 1, 
    standardState: 'Gas',
    atomicMass: 1.00,
    discovered: {
      by: 'Henry Cavendish',
      year: 1766
    },
    period: 1,
    group: 1,
    radioactive: false
  },
  {
    name: 'Helium',
    symbol: 'He',
    category: 'Noble Gas', 
    atomicNumberZ: 2,
    standardState: 'Gas',
    atomicMass: 4.00,
    discovered: {
      by: 'Pierre Janssen and Norman Lockyer',
      year: 1868
    },
    period: 1,
    group: 18,
    radioactive: false
  },
  {
    name: 'lithium',
    symbol: 'Li',
    category: 'Alkai Metal', 
    atomicNumberZ: 3, 
    standardState: 'Solid',
    atomicMass: 6.99,
    discovered: {
      by: 'Johan August Arfwedson',
      year: 1817
    },
    period: 2,
    group: 1,
    radioactive: false
  },
  {
    name: 'Beryllium',
    symbol: 'Be',
    category: 'Alkaline Earth Metal', 
    atomicNumberZ: 4,
    standardState: 'Solid', 
    atomicMass: 9.01,
    discovered: {
      by: 'Louis Nicolas Vauquelin',
      year: 1798
    },
    period: 2,
    group: 2,
    radioactive: false
  },
  {
    name: 'Boron',
    symbol: 'B',
    category: 'Metalloid', 
    atomicNumberZ: 5,
    standardState: 'Solid',
    atomicMass: 10.82,
    discovered: {
      by: 'Joseph Louis Gay-Lussac and Louis Jacques',
      year: 1808
    },
    period: 2,
    group: 13,
    radioactive: false
  },
  {
    name: 'Carbon',
    symbol: 'C',
    category: 'Nonmetal', 
    atomicNumberZ: 6,
    standardState: 'Solid', 
    atomicMass: 12.00,
    discovered: {
      by: 'Egyptians and Sumerians',
      year: -3750
    },
    period: 2,
    group: 14,
    radioactive: false
  },
  {
    name: 'Nitrogen',
    symbol: 'N',
    category: 'Nonmetal', 
    atomicNumberZ: 7, 
    standardState: 'Gas',
    atomicMass: 14.00,
    discovered: {
      by: 'Daniel Rutherford',
      year: 1772
    },
    period: 2,
    group: 15,
    radioactive: false
  },
  {
    name: 'Oxygen',
    symbol: 'O',
    category: 'Nonmetal', 
    atomicNumberZ: 8, 
    standardState: 'Gas',
    atomicMass: 15.99,
    discovered: {
      by: 'Carl Wilhelm Scheele',
      year: 1771
    },
    period: 2,
    group: 16,
    radioactive: false
  },
  {
    name: 'Fluorine',
    symbol: 'F',
    category: 'Halogen', 
    atomicNumberZ: 9, 
    standardState: 'Gas',
    atomicMass: 18.99,
    discovered: {
      by: 'André-Marie Ampère',
      year: 1810
    },
    period: 2,
    group: 17,
    radioactive: false
  },
  {
    name: 'Neon',
    symbol: 'Ne',
    category: 'Noble Gas', 
    atomicNumberZ: 10, 
    standardState: 'Gas',
    atomicMass: 20.17,
    discovered: {
      by: 'William Ramsay and Morris Travers',
      year: 1898
    },
    period: 2,
    group: 18,
    radioactive: false
  },
  {
    name: 'Sodium',
    symbol: 'Na',
    category: 'Alkali Metal', 
    atomicNumberZ: 11, 
    standardState: 'Solid',
    atomicMass: 22.98,
    discovered: {
      by: 'Humphry Davy',
      year: 1807
    },
    period: 3,
    group: 1,
    radioactive: false
  },
  {
    name: 'Magnesium',
    symbol: 'Mg',
    category: 'Alkaline Earth Metal', 
    atomicNumberZ: 12, 
    standardState: 'Solid',
    atomicMass: 24.30,
    discovered: {
      by: 'Joseph Black',
      year: 1808
    },
    period: 3,
    group: 2,
    radioactive: false
  },
  {
    name: 'Aluminum',
    symbol: 'Al',
    category: 'Post Transition Metal', 
    atomicNumberZ: 13, 
    standardState: 'Solid',
    atomicMass: 26.98,
    discovered: {
      by: 'Hans Christian Ørsted',
      year: 1824
    },
    period: 3,
    group: 13,
    radioactive: false
  },
  {
    name: 'Silicon',
    symbol: 'Si',
    category: 'Metalloid', 
    atomicNumberZ: 14, 
    standardState: 'Solid',
    atomicMass: 28.08,
    discovered: {
      by: 'Jöns Jacob Berzelius',
      year: 1823
    },
    period: 3,
    group: 14,
    radioactive: false
  },
  {
    name: 'Phosphorus',
    symbol: 'P',
    category: 'Nonmetal', 
    atomicNumberZ: 15, 
    standardState: 'Solid',
    atomicMass: 30.97,
    discovered: {
      by: 'Hennig Brand',
      year: 1669
    },
    period: 3,
    group: 15,
    radioactive: false
  },
  {
    name: 'Sulfur',
    symbol: 'S',
    category: 'Nonmetal', 
    atomicNumberZ: 16, 
    standardState: 'Solid',
    atomicMass: 32.07,
    discovered: {
      by: 'Chinese',
      year: -2000
    },
    period: 3,
    group: 16,
    radioactive: false
  },
  {
    name: 'Chlorine',
    symbol: 'Cl',
    category: 'Halogen', 
    atomicNumberZ: 17, 
    standardState: 'Gas',
    atomicMass: 35.45,
    discovered: {
      by: 'Carl Wilhelm Scheele',
      year: 1774
    },
    period: 3,
    group: 17,
    radioactive: false
  },
  {
    name: 'Argon',
    symbol: 'Ar',
    category: 'Noble Gas', 
    atomicNumberZ: 18, 
    standardState: 'Gas',
    atomicMass: 39.96,
    discovered: {
      by: 'Lord Rayleigh and William Ramsay',
      year: 1894
    },
    period: 3,
    group: 18,
    radioactive: false
  },
  {
    name: 'Potassium',
    symbol: 'K',
    category: 'Alkali Metal', 
    atomicNumberZ: 19, 
    standardState: 'Solid',
    atomicMass: 39.09,
    discovered: {
      by: 'Humphry Davy',
      year: 1807
    },
    period: 4,
    group: 1,
    radioactive: false
  },
  {
    name: 'Calcium',
    symbol: 'Ca',
    category: 'Alkaline Earth Metal', 
    atomicNumberZ: 20, 
    standardState: 'Solid',
    atomicMass: 40.07,
    discovered: {
      by: 'Humphry Davy',
      year: 1808
    },
    period: 4,
    group: 2,
    radioactive: false
  },
  {
    name: 'Scandium',
    symbol: 'Sc',
    category: 'Transition Metal', 
    atomicNumberZ: 21, 
    standardState: 'SOlid',
    atomicMass: 44.95,
    discovered: {
      by: 'Lars Fredrik Nilson',
      year: 1879
    },
    period: 4,
    group: 3,
    radioactive: false
  },
  {
    name: 'Titanium',
    symbol: 'T',
    category: 'Transition Metal', 
    atomicNumberZ: 22, 
    standardState: 'Solid',
    atomicMass: 47.86,
    discovered: {
      by: 'William Gregor',
      year: 1791
    },
    period: 4,
    group: 4,
    radioactive: false
  },
  {
    name: 'Vanadium',
    symbol: 'V',
    category: 'Transition Metal', 
    atomicNumberZ: 23, 
    standardState: 'Solid',
    atomicMass: 50.94,
    discovered: {
      by: 'Nils Gabriel Sefström',
      year: 1830
    },
    period: 4,
    group: 5,
    radioactive: false
  },
  {
    name: 'Chromium',
    symbol: 'Cr',
    category: 'Transition Metal', 
    atomicNumberZ: 24, 
    standardState: 'Solid',
    atomicMass: 51.99,
    discovered: {
      by: 'Louis Nicolas Vauquelin',
      year: 1794
    },
    period: 4,
    group: 6,
    radioactive: false
  },
  {
    name: 'Manganese',
    symbol: 'Mn',
    category: 'Transition Metal', 
    atomicNumberZ: 25, 
    standardState: 'Solid',
    atomicMass: 54.93,
    discovered: {
      by: '	Carl Wilhelm Scheele',
      year: 1774
    },
    period: 4,
    group: 7,
    radioactive: false
  },
  {
    name: 'Iron',
    symbol: 'Fe',
    category: 'Transition Metal', 
    atomicNumberZ: 26, 
    standardState: 'Solid',
    atomicMass: 55.84,
    discovered: {
      by: 'Unknown',
      year: -5000
    },
    period: 4,
    group: 8,
    radioactive: false
  },
  {
    name: 'Cobalt',
    symbol: 'Co',
    category: 'Transition Metal', 
    atomicNumberZ: 27, 
    standardState: 'Solid',
    atomicMass: 58.93,
    discovered: {
      by: 'Georg Brandt',
      year: 1735
    },
    period: 4,
    group: 9,
    radioactive: false
  },
  {
    name: 'Georg Brandt',
    symbol: 'Ni',
    category: 'Transition Metal', 
    atomicNumberZ: 28, 
    standardState: 'Solid',
    atomicMass: 58.69,
    discovered: {
      by: 'Axel Fredrik Cronstedt',
      year: 1751
    },
    period: 4,
    group: 10,
    radioactive: false
  },
  {
    name: 'Copper',
    symbol: 'Cu',
    category: 'Transition Metal', 
    atomicNumberZ: 29, 
    standardState: 'Solid',
    atomicMass: 63.54,
    discovered: {
      by: 'Middle East',
      year: -9000
    },
    period: 4,
    group: 11,
    radioactive: false
  },
  {
    name: 'Zinc',
    symbol: 'Zn',
    category: 'Transition Metal', 
    atomicNumberZ: 30, 
    standardState: 'Solid',
    atomicMass: 65.38,
    discovered: {
      by: 'Indian metallurgists',
      year: -1000
    },
    period: 4,
    group: 12,
    radioactive: false
  },
  {
    name: 'Gallium',
    symbol: 'Ga',
    category: 'Post-Transition Metal', 
    atomicNumberZ: 31, 
    standardState: 'Solid',
    atomicMass: 69.72,
    discovered: {
      by: 'Lecoq de Boisbaudran',
      year: 1875
    },
    period: 4,
    group: 13,
    radioactive: false
  },
  {
    name: 'Germanium',
    symbol: 'Ge',
    category: 'Metalloid', 
    atomicNumberZ: 32, 
    standardState: 'Solid',
    atomicMass: 72.63,
    discovered: {
      by: 'Dmitri Mendeleev',
      year: 1869
    },
    period: 4,
    group: 14,
    radioactive: false
  },
  {
    name: 'Arsenic',
    symbol: 'As',
    category: 'Metalloid', 
    atomicNumberZ: 33, 
    standardState: 'Solid',
    atomicMass: 74.92,
    discovered: {
      by: 'Arabic alchemists',
      year: -0815
    },
    period: 4,
    group: 15,
    radioactive: false
  },
  {
    name: 'Selenium',
    symbol: 'Se',
    category: 'Nonmetal', 
    atomicNumberZ: 34, 
    standardState: 'Solid',
    atomicMass: 78.97,
    discovered: {
      by: 'Jöns Jakob Berzelius and Johann Gottlieb Gahn',
      year: 1817
    },
    period: 4,
    group: 16,
    radioactive: false
  },
  {
    name: 'Bromine',
    symbol: 'Br',
    category: 'Halogen', 
    atomicNumberZ: 35, 
    standardState: 'Liquid',
    atomicMass: 55.84,
    discovered: {
      by: 'Antoine Jérôme Balard and Carl Jacob Löwig',
      year: 1825
    },
    period: 4,
    group: 17,
    radioactive: false
  },
  {
    name: 'Krypton',
    symbol: 'Kr',
    category: 'Noble Gas', 
    atomicNumberZ: 36, 
    standardState: 'Gas',
    atomicMass: 83.79,
    discovered: {
      by: 'William Ramsay and Morris Travers',
      year: 1898
    },
    period: 4,
    group: 18,
    radioactive: false
  },
  {
    name: 'Rubidium',
    symbol: 'Rb',
    category: 'Alkali Metal', 
    atomicNumberZ: 37, 
    standardState: 'Solid',
    atomicMass: 85.46,
    discovered: {
      by: 'Robert Bunsen and Gustav Kirchhoff ',
      year: 1861
    },
    period: 5,
    group: 1,
    radioactive: false
  },
  {
    name: 'Strontium',
    symbol: 'Sr',
    category: 'Alkaline Earth Metal', 
    atomicNumberZ: 38, 
    standardState: 'Solid',
    atomicMass: 87.62,
    discovered: {
      by: 'William Cruickshank',
      year: 1787
    },
    period: 5,
    group: 2,
    radioactive: false
  },
  {
    name: 'Yttrium',
    symbol: 'Y',
    category: 'Transition Metal', 
    atomicNumberZ: 39, 
    standardState: 'Solid',
    atomicMass: 88.90,
    discovered: {
      by: 'Johan Gadolin',
      year: 1794
    },
    period: 5,
    group: 3,
    radioactive: false
  },
  {
    name: 'Zirconium',
    symbol: 'Zr',
    category: 'Transition Metal', 
    atomicNumberZ: 40, 
    standardState: 'Solid',
    atomicMass: 91.22,
    discovered: {
      by: 'Jöns Jakob Berzelius',
      year: 1824
    },
    period: 5,
    group: 4,
    radioactive: false
  },
  {
    name: 'Niobium',
    symbol: 'Nb',
    category: 'Transition Metal', 
    atomicNumberZ: 41, 
    standardState: 'Solid',
    atomicMass: 92.90,
    discovered: {
      by: 'Charles Hatchett',
      year: 1801
    },
    period: 5,
    group: 5,
    radioactive: false
  },
  {
    name: 'Molybdenum',
    symbol: 'Mo',
    category: 'Transition Metal', 
    atomicNumberZ: 42, 
    standardState: 'Solid',
    atomicMass: 95.95,
    discovered: {
      by: 'Carl Wilhelm Scheele',
      year: 1778
    },
    period: 5,
    group: 6,
    radioactive: false
  },
  {
    name: 'Technetium',
    symbol: 'Tc',
    category: 'Transition Metal', 
    atomicNumberZ: 43, 
    standardState: 'Solid',
    atomicMass: 96.90,
    discovered: {
      by: 'Emilio Segrè and Carlo Perrier',
      year: 1937
    },
    period: 5,
    group: 7,
    radioactive: true
  },
  {
    name: 'Ruthenium',
    symbol: 'Ru',
    category: 'Transition Metal', 
    atomicNumberZ: 44, 
    standardState: 'Solid',
    atomicMass: 101.07,
    discovered: {
      by: 'Karl Ernst Claus',
      year: 1844
    },
    period: 5,
    group: 8,
    radioactive: false
  },
  {
    name: 'Rhodium',
    symbol: 'Rh',
    category: 'Transition Metal', 
    atomicNumberZ: 45, 
    standardState: 'Solid',
    atomicMass: 102.90,
    discovered: {
      by: 'William Hyde Wollaston',
      year: 1804
    },
    period: 5,
    group: 9,
    radioactive: false
  },
  {
    name: 'Palladium',
    symbol: 'Pd',
    category: 'Transition Metal', 
    atomicNumberZ: 46, 
    standardState: 'Solid',
    atomicMass: 106.42,
    discovered: {
      by: 'William Hyde Wollaston',
      year: 1802
    },
    period: 5,
    group: 10,
    radioactive: false
  },
  {
    name: 'Silver',
    symbol: 'Ag',
    category: 'Transition Metal', 
    atomicNumberZ: 47, 
    standardState: 'Solid',
    atomicMass: 107.86,
    discovered: {
      by: 'Unknown',
      year: -5000
    },
    period: 5,
    group: 11,
    radioactive: false
  },
  {
    name: 'Cadmium',
    symbol: 'Cd',
    category: 'Transition Metal', 
    atomicNumberZ: 48, 
    standardState: 'Solid',
    atomicMass: 112.41,
    discovered: {
      by: 'Karl Samuel Leberecht Hermann and Friedrich Stromeyer',
      year: 1817
    },
    period: 5,
    group: 12,
    radioactive: false
  },
  {
    name: 'Indium',
    symbol: 'In',
    category: 'Post-Transition Metal', 
    atomicNumberZ: 49, 
    standardState: 'Solid',
    atomicMass: 114.81,
    discovered: {
      by: 'Ferdinand Reich and Hieronymous Theodor Richter',
      year: 1863
    },
    period: 5,
    group: 13,
    radioactive: false
  },
  {
    name: 'Tin',
    symbol: 'Sn',
    category: 'Post-Transition Metal', 
    atomicNumberZ: 50, 
    standardState: 'Solid',
    atomicMass: 118.71,
    discovered: {
      by: 'Unknown',
      year: -3500
    },
    period: 5,
    group: 14,
    radioactive: false
  },
  {
    name: 'Antimony',
    symbol: 'Sb',
    category: 'Metalloid', 
    atomicNumberZ: 51, 
    standardState: 'Solid',
    atomicMass: 121.76,
    discovered: {
      by: 'Arabic alchemists',
      year: -0815
    },
    period: 5,
    group: 15,
    radioactive: false
  },
  {
    name: 'Tellurium',
    symbol: 'Te',
    category: 'Metalloid', 
    atomicNumberZ: 52, 
    standardState: 'Solid',
    atomicMass: 127.60,
    discovered: {
      by: 'Franz-Joseph Müller von Reichenstein',
      year: 1782
    },
    period: 5,
    group: 16,
    radioactive: false
  },
  {
    name: 'Iodine',
    symbol: 'I',
    category: 'Halogen', 
    atomicNumberZ: 53, 
    standardState: 'Solid',
    atomicMass: 126.90,
    discovered: {
      by: 'Bernard Courtois',
      year: 1811
    },
    period: 5,
    group: 17,
    radioactive: false
  },
  {
    name: 'Xenon',
    symbol: 'Xe',
    category: 'Noble Gas', 
    atomicNumberZ: 54, 
    standardState: 'Gas',
    atomicMass: 131.29,
    discovered: {
      by: 'William Ramsay and Morris Travers',
      year: 1898
    },
    period: 5,
    group: 18,
    radioactive: false
  },
  {
    name: 'Caesium',
    symbol: 'Cs',
    category: 'Alkali Metal', 
    atomicNumberZ: 55, 
    standardState: 'Solid',
    atomicMass: 132.905,
    discovered: {
      by: '	Robert Bunsen and Gustav Kirchhoff',
      year: 1860
    },
    period: 6,
    group: 1,
    radioactive: false
  },
  {
    name: 'Barium',
    symbol: 'Ba',
    category: 'Alkaline Earth Metal', 
    atomicNumberZ: 56, 
    standardState: 'Solid',
    atomicMass: 137.327,
    discovered: {
      by: '	Carl Wilhelm Scheele',
      year: 1772
    },
    period: 6,
    group: 2,
    radioactive: false
  },
  {
    name: 'Lanthanum',
    symbol: 'La',
    category: 'Lanthanide', 
    atomicNumberZ: 57, 
    standardState: 'Solid',
    atomicMass: 138.905,
    discovered: {
      by: '	Carl Gustaf Mosander',
      year: 1838
    },
    period: 6,
    group: 3.1,
    radioactive: false
  },
  {
    name: 'Cerium',
    symbol: 'Ce',
    category: 'Lanthanide', 
    atomicNumberZ: 58, 
    standardState: 'Solid',
    atomicMass: 140.116,
    discovered: {
      by: 'Martin Heinrich Klaproth, Jöns Jakob Berzelius and Wilhelm Hisinger',
      year: 1838
    },
    period: 6,
    group: 3.1,
    radioactive: false
  },
  {
    name: 'Praseodymium',
    symbol: 'Pr',
    category: 'Lanthanide', 
    atomicNumberZ: 59, 
    standardState: 'Solid',
    atomicMass: 140.907,
    discovered: {
      by: 'Carl Auer von Welsbach',
      year: 1885
    },
    period: 6,
    group: 3.1,
    radioactive: false
  },
  {
    name: 'Neodymium',
    symbol: 'Nd',
    category: 'Lanthanide', 
    atomicNumberZ: 60, 
    standardState: 'Solid',
    atomicMass: 144.242,
    discovered: {
      by: 'Carl Auer von Welsbach',
      year: 1885
    },
    period: 6,
    group: 3.1,
    radioactive: false
  },
  {
    name: 'Promethium',
    symbol: 'Pm',
    category: 'Lanthanide', 
    atomicNumberZ: 61, 
    standardState: 'Solid',
    atomicMass: 144.912,
    discovered: {
      by: 'Charles D. Coryell, Jacob A. Marinsky and Lawrence E. Glendenin ',
      year: 1945
    },
    period: 6,
    group: 3.1,
    radioactive: false
  },
  {
    name: 'Samarium',
    symbol: 'Sm',
    category: 'Lanthanide', 
    atomicNumberZ: 62, 
    standardState: 'Solid',
    atomicMass: 150.36,
    discovered: {
      by: 'Lecoq de Boisbaudran',
      year: 1879
    },
    period: 6,
    group: 3.1,
    radioactive: false
  },
  {
    name: 'Europium',
    symbol: 'Eu',
    category: 'Lanthanide', 
    atomicNumberZ: 63, 
    standardState: 'Solid',
    atomicMass: 151.964,
    discovered: {
      by: 'Eugène-Anatole Demarçay',
      year: 1901
    },
    period: 6,
    group: 3.1,
    radioactive: false
  },
  {
    name: 'Gadolinium',
    symbol: 'Gd',
    category: 'Lanthanide', 
    atomicNumberZ: 64, 
    standardState: 'Solid',
    atomicMass: 157.25,
    discovered: {
      by: 'Jean Charles Galissard de Marignac',
      year: 1880
    },
    period: 6,
    group: 3.1,
    radioactive: false
  },
  {
    name: 'Terbium',
    symbol: 'Tb',
    category: 'Lanthanide', 
    atomicNumberZ: 65, 
    standardState: 'Solid',
    atomicMass: 158.925,
    discovered: {
      by: 'Carl Gustaf Mosander',
      year: 1843
    },
    period: 6,
    group: 3.1,
    radioactive: false
  },
  {
    name: 'Dysprosium',
    symbol: 'Dy',
    category: 'Lanthanide', 
    atomicNumberZ: 66, 
    standardState: 'Solid',
    atomicMass: 162.500,
    discovered: {
      by: 'Lecoq de Boisbaudran',
      year: 1886
    },
    period: 6,
    group: 3.1,
    radioactive: false
  },
  {
    name: 'Holmium',
    symbol: 'Ho',
    category: 'Lanthanide', 
    atomicNumberZ: 67, 
    standardState: 'Solid',
    atomicMass: 164.930,
    discovered: {
      by: 'Jacques-Louis Soret and Marc Delafontaine',
      year: 1878
    },
    period: 6,
    group: 3.1,
    radioactive: false
  },
  {
    name: 'Erbium',
    symbol: 'Er',
    category: 'Lanthanide', 
    atomicNumberZ: 68, 
    standardState: 'Solid',
    atomicMass: 167.26,
    discovered: {
      by: '	Carl Gustaf Mosander',
      year: 1843
    },
    period: 6,
    group: 3.1,
    radioactive: false
  },
  {
    name: 'Thulium',
    symbol: 'Tm',
    category: 'Lanthanide', 
    atomicNumberZ: 69, 
    standardState: 'Solid',
    atomicMass: 168.934,
    discovered: {
      by: 'Per Teodor Cleve',
      year: 1879
    },
    period: 6,
    group: 3.1,
    radioactive: false
  },
  {
    name: 'Ytterbium',
    symbol: 'Yb',
    category: 'Lanthanide', 
    atomicNumberZ: 70, 
    standardState: 'Solid',
    atomicMass: 173.05,
    discovered: {
      by: 'Jean Charles Galissard de Marignac',
      year: 1878
    },
    period: 6,
    group: 3.1,
    radioactive: false
  },
  {
    name: 'Lutetium',
    symbol: 'Lu',
    category: 'Lanthanide', 
    atomicNumberZ: 71, 
    standardState: 'Solid',
    atomicMass: 174.966,
    discovered: {
      by: 'Carl Auer von Welsbach and Georges Urbain',
      year: 1906
    },
    period: 6,
    group: 3.1,
    radioactive: false
  },
  {
    name: 'Hafnium',
    symbol: 'Hf',
    category: 'Transition Metal', 
    atomicNumberZ: 72, 
    standardState: 'Solid',
    atomicMass: 178.49,
    discovered: {
      by: 'Dirk Coster and George de Hevesy',
      year: 1922
    },
    period: 6,
    group: 4,
    radioactive: true
  },
  {
    name: 'Tantalum',
    symbol: 'Ta',
    category: 'Transition Metal', 
    atomicNumberZ: 73, 
    standardState: 'Solid',
    atomicMass: 180.947,
    discovered: {
      by: 'Anders Gustaf Ekeberg',
      year: 1802
    },
    period: 6,
    group: 5,
    radioactive: false
  },
  {
    name: 'Tungsten',
    symbol: 'W',
    category: 'Transition Metal', 
    atomicNumberZ: 74, 
    standardState: 'Solid',
    atomicMass: 183.84,
    discovered: {
      by: 'Juan José Elhuyar and Fausto Elhuyar',
      year: 1783
    },
    period: 6,
    group: 6,
    radioactive: false
  },
  {
    name: 'Rhenium',
    symbol: 'Re',
    category: 'Transition Metal', 
    atomicNumberZ: 75, 
    standardState: 'Solid',
    atomicMass: 186.207,
    discovered: {
      by: 'Walter Noddack, Ida Noddack and Otto Berg',
      year: 1925
    },
    period: 6,
    group: 7,
    radioactive: false
  },
  {
    name: 'Osmium',
    symbol: 'Os',
    category: 'Transition Metal', 
    atomicNumberZ: 76, 
    standardState: 'Solid',
    atomicMass: 190.23,
    discovered: {
      by: 'Smithson Tennant',
      year: 1803
    },
    period: 6,
    group: 8,
    radioactive: false
  },
  {
    name: 'Iridium',
    symbol: 'Ir',
    category: 'Transition Metal', 
    atomicNumberZ: 77, 
    standardState: 'Solid',
    atomicMass: 192.217,
    discovered: {
      by: 'Smithson Tennant',
      year: 1803
    },
    period: 6,
    group: 9,
    radioactive: false
  },
  {
    name: 'Platinum',
    symbol: 'Pt',
    category: 'Transition Metal', 
    atomicNumberZ: 78, 
    standardState: 'Solid',
    atomicMass: 195.084,
    discovered: {
      by: 'Antonio de Ulloa',
      year: 1735
    },
    period: 6,
    group: 10,
    radioactive: false
  },
  {
    name: 'Gold',
    symbol: 'Au',
    category: 'Transition Metal', 
    atomicNumberZ: 79, 
    standardState: 'Solid',
    atomicMass: 196.966,
    discovered: {
      by: 'In the Middle East',
      year: -6000
    },
    period: 6,
    group: 11,
    radioactive: false
  },
  {
    name: 'Mercury',
    symbol: 'Hg',
    category: 'Transition Metal', 
    atomicNumberZ: 80, 
    standardState: 'Liquid',
    atomicMass: 200.592,
    discovered: {
      by: 'Ancient Egyptians',
      year: -1500
    },
    period: 6,
    group: 12,
    radioactive: false
  },
  {
    name: 'Thallium',
    symbol: 'Tl',
    category: 'Post-Transition Metal', 
    atomicNumberZ: 81, 
    standardState: 'Solid',
    atomicMass: 204.383,
    discovered: {
      by: 'William Crookes',
      year: 1861
    },
    period: 6,
    group: 13,
    radioactive: false
  },
  {
    name: 'Lead',
    symbol: 'Pb',
    category: 'Post-Transition Metal', 
    atomicNumberZ: 82, 
    standardState: 'Solid',
    atomicMass: 206.14,
    discovered: {
      by: 'Middle East',
      year: -7000
    },
    period: 6,
    group: 14,
    radioactive: false
  },
  {
    name: 'Bismuth',
    symbol: 'Bi',
    category: 'Post-Transition Metal', 
    atomicNumberZ: 83, 
    standardState: 'Solid',
    atomicMass: 208.980,
    discovered: {
      by: 'Arabic alchemists',
      year: -1000
    },
    period: 6,
    group: 15,
    radioactive: false
  },
  {
    name: 'Polonium',
    symbol: 'Po',
    category: 'Metalloid', 
    atomicNumberZ: 84, 
    standardState: 'Solid',
    atomicMass: 208.982,
    discovered: {
      by: 'Pierre and Marie Curie',
      year: 1898
    },
    period: 6,
    group: 16,
    radioactive: false
  },
  {
    name: 'Astatine',
    symbol: 'At',
    category: 'Halogen', 
    atomicNumberZ: 85, 
    standardState: 'Solid',
    atomicMass: 209.987,
    discovered: {
      by: 'Dale R. Corson, Kenneth Ross MacKenzie and Emilio Segrè',
      year: 1940
    },
    period: 6,
    group: 17,
    radioactive: false
  },
  {
    name: 'Radon',
    symbol: 'Rn',
    category: 'Noble Gas', 
    atomicNumberZ: 86, 
    standardState: 'Gas',
    atomicMass: 222.017,
    discovered: {
      by: 'Ernest Rutherford and Robert B. Owens',
      year: 1899
    },
    period: 6,
    group: 18,
    radioactive: false
  },
  // {
  //   name: '',
  //   symbol: '',
  //   category: 'Transition Metal', 
  //   atomicNumberZ: 80, 
  //   standardState: 'Solid',
  //   atomicMass: 1,
  //   discovered: {
  //     by: '',
  //     year: 
  //   },
  //   period: 6,
  //   group: 6,
  //   radioactive: false
  // },

  
]

module.exports = db;