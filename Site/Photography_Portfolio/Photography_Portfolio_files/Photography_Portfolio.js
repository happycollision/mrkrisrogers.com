// Created by iWeb 2.0.4 local-build-20120206

function createMediaStream_id2()
{return IWCreateMediaCollection("http://www.mrkrisrogers.com/Site/Photography_Portfolio/Photography_Portfolio_files/rss.xml",false,1,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id2()
{createMediaStream_id2().load('http://www.mrkrisrogers.com/Site/Photography_Portfolio',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget6'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id2',{pageIndex:0}));});}
function layoutMediaGrid_id2(range)
{createMediaStream_id2().load('http://www.mrkrisrogers.com/Site/Photography_Portfolio',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id2',new IWPhotoGridLayout(3,new IWSize(207,155),new IWSize(207,32),new IWSize(226,202),27,27,0,new IWSize(14,20)),new IWPhotoFrame([IWCreateImage('Photography_Portfolio_files/FormalShadow_01.png'),IWCreateImage('Photography_Portfolio_files/FormalShadow_02.png'),IWCreateImage('Photography_Portfolio_files/FormalShadow_03.png'),IWCreateImage('Photography_Portfolio_files/FormalShadow_06.png'),IWCreateImage('Photography_Portfolio_files/FormalShadow_12.png'),IWCreateImage('Photography_Portfolio_files/FormalShadow_11.png'),IWCreateImage('Photography_Portfolio_files/FormalShadow_10.png'),IWCreateImage('Photography_Portfolio_files/FormalShadow_04.png')],null,2,0.466667,1.000000,5.000000,1.000000,4.000000,17.000000,17.000000,17.000000,36.000000,4.000000,837.000000,4.000000,837.000000,null,null,null,0.100000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget6',null,'widget7',{showTitle:false,showMetric:false})});}
function relayoutMediaGrid_id2(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id2(range);}
function onStubPage()
{var args=getArgs();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id2(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
IWRegisterNamedImage('contribution overlay','../Media/Photo-Overlay-Contribution.png')
loadMozillaCSS('Photography_Portfolio_files/Photography_PortfolioMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');NotificationCenter.addObserver(null,relayoutMediaGrid_id2,'RangeChanged','id2')
adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');adjustLineHeightIfTooBig('id9');adjustFontSizeIfTooBig('id9');Widget.onload();fixAllIEPNGs('../Media/transparent.gif');fixupAllIEPNGBGs();initializeMediaStream_id2()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
