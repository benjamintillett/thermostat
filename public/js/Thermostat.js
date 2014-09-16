function Thermostat() {
	this.MAX_TEMP = 32;
	this.MAX_POWER_SAVING_TEMP = 25;
	this.MIN_TEMP = 10;
	this.temp = 20;
	this.powerSaving = true;
};

Thermostat.prototype.up = function(degrees) {
	degrees = degrees ? degrees : 1;
	this.temp += (1*degrees);
	this._limitTemperature();
};	

Thermostat.prototype.down = function(degrees) {
	degrees = degrees ? degrees : 1;
	this.temp -= (1*degrees);
	this._limitTemperature();	
};

Thermostat.prototype.isSavingPower = function() {
	return this.powerSaving;
};

Thermostat.prototype.isNotSavingPower = function() {
	return !this.powerSaving;
};

Thermostat.prototype.turnOffPowerSaving = function() {
	this.powerSaving = false;
};

Thermostat.prototype.turnOnPowerSaving = function() {
	this.powerSaving = true;
};

Thermostat.prototype._limitTemperature = function() {
	if((this.temp > this.MAX_POWER_SAVING_TEMP) && this.isSavingPower()) this.temp = this.MAX_POWER_SAVING_TEMP;
	if(this.temp > this.MAX_TEMP) this.temp = this.MAX_TEMP;
	if (this.temp < this.MIN_TEMP) this.temp = this.MIN_TEMP;
};

Thermostat.prototype.resetTemp = function() {
	this.temp = 20;
};