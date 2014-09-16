describe("Thermostat", function() {
	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	it("its default temperature is 20ºC", function() {
		expect(thermostat.temp).toEqual(20);
	});

	it("its temperature can be increased", function() {
		thermostat.up();
		expect(thermostat.temp).toEqual(21);
	});

	it("its temperature can be decreased", function() {
		thermostat.down();
		expect(thermostat.temp).toEqual(19);
	});

	it("its temperature can be decreased by 10", function() {
		thermostat.down(10);
		expect(thermostat.temp).toEqual(10);
	});

	it("its temperature can be increased by 5", function() {
		thermostat.up(5);
		expect(thermostat.temp).toEqual(25);
	});

	it("its minimum temperature is 10ºC", function() {
		thermostat.down(11);
		expect(thermostat.temp).toEqual(10);
	});

	it("its default maximum temperature is 25ºC", function() {
		thermostat.up(20);
		expect(thermostat.temp).toEqual(25);
	});

	it("its maximum temperature is 32ºC when power-saving mode is off", function() {
		thermostat.turnOffPowerSaving();
		thermostat.up(40);
		expect(thermostat.temp).toEqual(32);
	});

	it("power-saving mode is on by default", function() {
		expect(thermostat.isSavingPower()).toEqual(true);
	});

	it("power-saving mode can be changed ", function() {
		thermostat.turnOffPowerSaving();
		expect(thermostat.isNotSavingPower()).toEqual(true);
	});

	it("power-saving mode can be switched on again", function() {
		thermostat.turnOffPowerSaving();
		thermostat.turnOnPowerSaving();
		expect(thermostat.isSavingPower()).toEqual(true);
	});

	it("can have its temperature reset", function() {
		thermostat.up(40);
		thermostat.resetTemp();
		expect(thermostat.temp).toEqual(20);
	});

})