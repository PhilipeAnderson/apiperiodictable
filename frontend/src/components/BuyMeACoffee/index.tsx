import Image from 'next/image';

export function BuyMeACoffee() {
  return(
    <a 
      type="button"
      target="_blank"
      href="https://www.buymeacoffee.com/periodictable"
    >
      <Image 
        src="/img/buymeacoffee.png" 
        alt="Button Buy Me A Coffee"
        width={200}
        height={50}
        />
    </a>
  )
}





{/* <script 
type="text/javascript" 
src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" 
data-name="bmc-button" 
data-slug="periodictable" 
data-color="#FFDD00" 
data-emoji=""  
data-font="Cookie" 
data-text="Buy me a coffee" 
data-outline-color="#000000" 
data-font-color="#000000" 
data-coffee-color="#ffffff" 
>

</script> */}