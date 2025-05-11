/***
 * Data items for the donation navbar dropdown.
 */

export const DonationTypes = [
  {
    id: 1,
    label: 'Donasi Uang',
    route: '/donasi/donasi-uang',
    onClick: () => console.log('Donasi Uang clicked')
  },
  {
    id: 2,
    label: 'Donasi Barang',
    route: '/donasi/donasi-barang',
    onClick: () => console.log('Donasi Barang clicked')
  }
]