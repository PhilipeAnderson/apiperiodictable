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
    name: '',
    symbol: '',
    category: '', 
    atomicNumberZ: 11, 
    standardState: '',
    atomicMass: 22.989,
    discovered: {
      by: '',
      year: 1807
    },
    period: 3,
    group: 1,
    radioactive: false
  },
  {
    name: '',
    symbol: '',
    category: '', 
    atomicNumberZ: 11, 
    standardState: '',
    atomicMass: 22.989,
    discovered: {
      by: '',
      year: 1807
    },
    period: 3,
    group: 1,
    radioactive: false
  },
  {
    name: '',
    symbol: '',
    category: '', 
    atomicNumberZ: 11, 
    standardState: '',
    atomicMass: 22.989,
    discovered: {
      by: '',
      year: 1807
    },
    period: 3,
    group: 1,
    radioactive: false
  },
  {
    name: '',
    symbol: '',
    category: '', 
    atomicNumberZ: 11, 
    standardState: '',
    atomicMass: 22.989,
    discovered: {
      by: '',
      year: 1807
    },
    period: 3,
    group: 1,
    radioactive: false
  },
]

module.exports = db;