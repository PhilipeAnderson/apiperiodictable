const db = [
  {
    name: 'Hydrogen',
    symbol: 'H',
    category: 'Nonmetal', 
    atomicNumberZ: 1, 
    standardState: 'Gas',
    atomicMass: 1.008,
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
    atomicMass: 4.002,
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
    atomicMass: 6.997,
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
    atomicMass: 9.012,
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
    atomicMass: 10.821,
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
    atomicMass: 12.001,
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
    atomicMass: 14.007,
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
    atomicMass: 15.999,
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
    atomicMass: 9,
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
    atomicMass: 20.179,
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
    atomicMass: 22.989,
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
    atomicMass: 24.305,
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
    atomicMass: 26.981,
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
    atomicMass: 28.085,
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
    atomicMass: 30.973,
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
    atomicMass: 32.076,
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
    atomicMass: 35.457,
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
    atomicMass: 39.963,
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
    atomicMass: 39.098,
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
    atomicMass: 40.078,
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
    atomicMass: 44.955,
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
    atomicMass: 47.867,
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
    atomicMass: 50.941,
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
    atomicMass: 51.996,
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
    atomicMass: 54.938,
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
    atomicMass: 55.845,
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
    atomicMass: 58.933,
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
    atomicMass: 58.693,
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
    atomicMass: 63.546,
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
    atomicMass: 65.382,
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
    standardState: 'SOlid',
    atomicMass: 69.723,
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
    atomicMass: 72.630,
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
    atomicMass: 74.921,
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
    atomicMass: 78.971,
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
    atomicMass: 55.845,
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
    atomicMass: 83.798,
    discovered: {
      by: 'William Ramsay and Morris Travers',
      year: 1898
    },
    period: 4,
    group: 18,
    radioactive: false
  },
  {
    name: '',
    symbol: '',
    category: '', 
    atomicNumberZ: 26, 
    standardState: '',
    atomicMass: 55.845,
    discovered: {
      by: '',
      year: -5000
    },
    period: 4,
    group: 8,
    radioactive: false
  },

  
]

module.exports = db;