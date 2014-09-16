function Thermostat() {
	this.temp = 20;
	this.powerSaving = true

};

Thermostat.prototype.up = function(degrees) {
	degrees = degrees ? degrees : 1
	this.temp += (1*degrees);
};

Thermostat.prototype.down = function(degrees) {
	degrees = degrees ? degrees : 1
	this.temp -= (1*degrees);
	if (this.temp < 10) this.temp = 10;
};
Thermostat.prototype.isSavingPower = function() {
	return this.powerSaving
	// body...
};

