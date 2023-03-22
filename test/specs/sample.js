describe('General Store app', () => {
    it('...', async () => {
        await $('//*[@text ="Female"]').click()
        await $('//*[@text ="Enter name here"]').setValue('sumit')
        await $('//*[@class="android.widget.Spinner" and @index="1"]').click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("Austria"))').click()
        
        await $('//*[@class="android.widget.Button" and @index="6"]').click()
        await $('//*[@class="android.widget.TextView" and @index="1"]').click()
        await $('//*[@bounds="[540,971][1002,1009]"]').click()
        await $('//*[@bounds="[540,1786][1002,1824]"]').click()
        await $('//*[@bounds="[931,96][1025,190]"]').click()
        await $('//*[@text ="Visit to the website to complete purchase"]').click()
        await driver.pause(9000)
        
        await driver.getContexts()
        await driver.switchContext("WEBVIEW_com.androidsample.generalstore")
        await driver.pause(9000)
        await $('//*[@name="q"]').addValue('cars')
        await driver.pause(9000)
        await $('//*[@name="btnK"]').click()
        
        await driver.switchContext('Native_APP')
        await DriverCommand.back()
    });
}); 