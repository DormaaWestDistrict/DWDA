
const whatsapp = document.querySelector('.whatsapp')
const twitter = document.querySelector('.twitter')
const facebook = document.querySelector('.facebook')
const telegram = document.querySelector('.telegram')
const youtube = document.querySelector('.youtube')


const pageUrl=location.href
const message ='This is an awesome news,kindly take 5 minutes of your time to read it'

const whatsappApi ='https://wa.me/?text=${pageUrl}.${message}';
const facebookApi =  ;
const twitterApi ='https://twitter.com/intent/tweet?text=${pageUrl}.${message}';
const telegramApi ='https://t.me/share/url?url=${pageUrl}&text=${message}';
const youtubeApi =  ;



whatsapp.addEventListener('click',() => {
window.open(url= whatsappApi,target='blank')	
		
})

twitter.addEventListener('click',() => {
window.open(url= twitterApi,target='blank')	
		
})

facebook.addEventListener('click',() => {
window.open(url= facebookApi,target='blank')	
		
})

telegram.addEventListener('click',() => {
window.open(url= telegramApi,target='blank')	
		
})

youtube.addEventListener('click',() => {
window.open(url= youtubeApi,target='blank')	
		
})



