
var adminlogin =  function(driver)
  {
    driver
    .url(driver.globals.userNames.adminURL)
    .windowMaximize("current")
    .waitForElementVisible('body', 2000)
    .useXpath()
    .click("//input[@id='admin_email']")
    .pause(1000)
    .setValue("//input[@id='admin_email']", driver.globals.userNames.adminEmail)
    .pause(1000)
    .click("//input[@id='admin_password']")
    .pause(1000)
    .setValue("//input[@id='admin_password']", driver.globals.userNames.adminPassword)
    .pause(1000)
    .click("//input[@class='btn btn-login test-login-button']")
    .pause(2000)
    .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/siginConfirmAdmin.png')
    .pause(2000)
    //click Mission Hub
    .click("//a[@class='test-nav-hubs']")
    .pause(2000)
    .assert.containsText("//a[@class='test-nav-hubs']", "Mission Hub")
    //click Activity
    .click("(//a[@class='rowclick test-hub-link ng-binding'])[2]")
    .pause(2000)

  }

var activityMonitoring = function(driver)
{
  driver
  .click("//a[@class=' test-hub-nav-monitoring']")
  .pause(2000)
  //click flags postive
  .click("(//input[@ng-model='share.admin_feedback'])[1]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[4]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[7]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[10]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[13]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[16]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[19]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[22]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[25]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[28]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[31]")
  .pause(2000)
  .click("(//input[@ng-model='share.admin_feedback'])[34]")
  .pause(2000)

}

var OverviewTab = function(driver)
{
  driver
  .click("//a[@class=' test-hub-nav-overview']")
  .pause(2000)
  .click("//a[@class='mission-item-analytics-link']")
  .pause(2000)
}


    
var downloadAnalytics = function(driver)
{
  driver

    // DAR admin Page
    .click("//input[@ng-model='ctrl.report.start_date']")
    .pause(2000)
    .click("//input[@ng-model='ctrl.report.end_date']")
    .pause(2000)
    .click("//td[@class='active day']/preceding-sibling::td[@class='day'][1]")
    .pause(3000)
    .click("//input[@class='js-autocomplete ui-autocomplete-input']")
    .pause(2000)
    .waitForElementVisible("//li[@class='ui-menu-item']/a",2000)
    .moveToElement("//li[@class='ui-menu-item']/a",1,1)
    .pause(2000)
    .click("//input[@id='switch_cb_ctrl.report.benchmarks_enabled']")
    .pause(2000)
    .click("//input[@ng-model='report.third_party.shared_links_clicked']")
    .pause(2000)
    .setValue("//input[@ng-model='report.third_party.shared_links_clicked']",'24500')
    .pause(2000)
    .click("//input[@ng-model='report.third_party.mission_impression']")
    .pause(2000)
    .setValue("//input[@ng-model='report.third_party.mission_impression']",'24500')
    .pause(2000)
    .click("//input[@ng-model='report.benchmarks.shares_count']")
    .pause(2000)
    .setValue("//input[@ng-model='report.benchmarks.shares_count']",'550')
    .pause(2000)
    .click("//input[@ng-model='report.benchmarks.shared_links_clicked']")
    .pause(2000)
    .setValue("//input[@ng-model='report.benchmarks.shared_links_clicked']",'250')
    .pause(2000)
    .click("//input[@ng-model='report.benchmarks.mission_impression']")
    .pause(2000)
    .setValue("//input[@ng-model='report.benchmarks.mission_impression']",'12500')
    .pause(2000)
    .click("(//button[@class='btn btn-sidebar btn-primary w100 test-activity-save'])[1]")
    .pause(2000)
    .click("//button[@ng-click='ctrl.open()']")
    .pause(2000)
    .click("(//label[@class='ng-binding'])[1]")
    .pause(2000)
    .click("(//label[@class='ng-binding'])[2]")
    .pause(2000)
    .click("//button[@ng-click='ok()']")
    .pause(2000)
    .click("//input[@ng-model='report.mission_highlights.heading']")
    .pause(2000)
    .setValue("//input[@ng-model='report.mission_highlights.heading']",'mission_highlights heading')
    .pause(2000)
    .click("//div[@data-placeholder='Mission Highlights']")
    .pause(2000)
    .setValue("//div[@data-placeholder='Mission Highlights']",'Mission Highlights description')
    .pause(2000)
    .click("//input[@ng-model='report.mission_highlights.hashtag']")
    .pause(2000)
    .setValue("//input[@ng-model='report.mission_highlights.hashtag']",'#Mission')
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[1]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[2]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[3]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[4]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[5]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[6]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[7]")
    .pause(4000)
    .click("(//button[@ng-click='ctrl.add(share)'])[2]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[4]")
    .pause(2000)
    .click("(//button[@ng-click='ctrl.add(share)'])[6]")
    .pause(2000)
    .click("(//button[@class='btn btn-sidebar btn-primary w100 test-activity-save'])[1]")
    .pause(2000)
  }

var downloadAnalyticsPreviewButton = function(driver)
{
  driver

    .click("//button[@class='btn btn-invert btn-invert-preview']")
    .pause(2000)
    .window_handles(function(result) {
    var handle = result.value[1];
    this.switchWindow(handle);})
   
  }

var downloadAnalyticsPreview = function(driver)
{
  driver
  .execute('scrollTo(0,400)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview1.png')
  .pause(2000)
  .execute('scrollTo(0,800)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview2.png')
  .execute('scrollTo(0,1000)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview3.png')
  .pause(2000)
  .execute('scrollTo(0,1500')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview4.png')
  .pause(2000)
  .execute('scrollTo(0,2000)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview5.png')
  .pause(2000)
  .execute('scrollTo(0,2500)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview6.png')
  .pause(2000)
  .execute('scrollTo(0,3000)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview7.png')
  .pause(2000)
  .execute('scrollTo(0,3500)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview8.png')
  .pause(2000)
  .execute('scrollTo(0,4000)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview9.png')
  .pause(2000)
  .execute('scrollTo(0,4500)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview10.png')
  .pause(2000)
  .execute('scrollTo(0,5000)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview11.png')
  .pause(2000)
  .execute('scrollTo(0,5500)')
  .pause(2000)
  .saveScreenshot('screenshots/sprint'+driver.globals.userNames.sprint+'/verifydarPreview12.png')
  .pause(2000)
  .execute('scrollTo(0,6000)')
  .pause(2000)
 
}

module.exports={
  adminlogin:adminlogin,
  //activityMonitoring:activityMonitoring
  OverviewTab:OverviewTab,
  downloadAnalytics:downloadAnalytics,
 //downloadAnalyticsPreviewButton:downloadAnalyticsPreviewButton,
  //downloadAnalyticsPreview:downloadAnalyticsPreview
}
