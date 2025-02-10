import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioBanner extends LightningElement {

    linkedinUrl = 'https://www.linkedin.com/in/nimish-vaidya/'
    trailheadUrl = 'https://www.salesforce.com/trailblazer/nimishvaidya'
    githubUrl = 'https://github.com/nimishvaidya'
    twitterUrl = 'https://x.com/vaidya_nimish'

    userPic = `${PortfolioAssets}/PortfolioAssets/nimish_profile_pic.jpeg`
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`
    twitter = `${PortfolioAssets}/PortfolioAssets/Social/twitter.svg`
   
}    