const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');
// const breedName = process.argv[2];

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via a callback', (done) => {
    fetchBreedDescription('Siberian', (error, desc) => {
      assert.equal(error, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns an error for an invalid or non-existent breed, via a callback', (done) => {
    fetchBreedDescription('InvalidBreed', (error, desc) => {
      assert.equal(error, "Breed not found");
      assert.equal(desc, null);
      done();
    });
  });
});