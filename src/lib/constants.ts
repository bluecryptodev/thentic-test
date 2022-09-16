export interface IHeaderNavLink {
  href: string;
  title: string;
}

export const headerNavLinks: Array<IHeaderNavLink> = [
  { href: '/nft-contract', title: 'NFT Contract' },
  { href: '/nft', title: 'NFT' },
  { href: '/invoice', title: 'Invoice' },
  { href: '/wallets', title: 'Wallets' },
];
