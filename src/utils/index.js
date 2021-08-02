
export const currencyCodeSymbols = {
  'EUR': '€',
  'GBP': '£',
  'USD': '$',
  'CAD': '$',
};

export const processVehicleData = (vehicleData) => {
  const flattenedVehicles = [];
  vehicleData.forEach(vendor => {
    vendor.VehAvails.forEach(vehicle => {
      flattenedVehicles.push({
        id: `${vendor.Vendor['@Name']}-${vehicle.Vehicle.VehMakeModel['@Name']}-${vehicle.Vehicle['@Code']}-${vehicle.TotalCharge['@RateTotalAmount']}`,
        name: vehicle.Vehicle.VehMakeModel['@Name'],
        airConditioning: vehicle.Vehicle['@AirConditionInd'],
        baggageQuantity: vehicle.Vehicle['@BaggageQuantity'],
        code: vehicle.Vehicle['@Code'],
        codeContext: vehicle.Vehicle['@CodeContext'],
        doorCount: vehicle.Vehicle['@DoorCount'],
        driveType: vehicle.Vehicle['@DriveType'],
        fuelType: vehicle.Vehicle['@FuelType'],
        passengerQuantity: vehicle.Vehicle['@PassengerQuantity'],
        transmission: vehicle.Vehicle['@TransmissionType'],
        pictureURL: vehicle.Vehicle['PictureURL'],
        currencyCode: vehicle.TotalCharge['@CurrencyCode'],
        estimatedTotal: vehicle.TotalCharge['@EstimatedTotalAmount'],
        rate: vehicle.TotalCharge['@RateTotalAmount'],
        status: vehicle['@Status'],
        vendor: {
          name: vendor.Vendor['@Name'],
          code: vendor.Vendor['@Code'],
        }
      })
    })
  });
  return flattenedVehicles;
}