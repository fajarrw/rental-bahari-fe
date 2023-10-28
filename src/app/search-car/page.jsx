import Image from "next/image";
import "./styles.css";

export default function SearchCar() {
  return (
    <main className="flex flex-col md:flex-row">
      <div className="flex flex-row md:flex-col w-full md:w-max py-3 md:p-0 justify-center md:justify-start gap-10 md:gap-0 shadow-lg md:shadow-none">
        <div className="dd-filter">
          <button className="dd-btn-filter md:hidden flex flox-row gap-2 items-center text-sm">
            <Image
              src="/assets/filter.svg"
              width={16}
              height={16}
              alt="filter"
            />
            Filters
          </button>
          <div className="dd-content-filter w-64 px-4 pt-5 pb-4 gap-3">
            <div className="flex flex-row justify-between pb-2">
              <h2 className="font-semibold text-lg">Filters</h2>
              <p className="text-lg text-rb-darkgreen">Clear All</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-base">Price per Day</h3>
              <div className="flex flex-row justify-between">
                <p>Rp. 50000</p>
                <p>Rp. 5000000</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-base">Types</h3>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Crossover"
                  />
                  <label for="vehicle1">Crossover</label>
                  <br />
                </div>
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="Hatchback"
                  />
                  <label for="vehicle2">Hatchback</label>
                  <br />
                </div>
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="SUV"
                  />
                  <label for="vehicle3">SUV</label>
                  <br />
                </div>
                <a className="text-xs text-rb-darkgreen">+ View More</a>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-base">Models</h3>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Agya"
                  />
                  <label for="vehicle1">Agya</label>
                  <br />
                </div>
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="HR-V"
                  />
                  <label for="vehicle2">HR-V</label>
                  <br />
                </div>
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id="vehicle3"
                    name="vehicle3"
                    value="Civic"
                  />
                  <label for="vehicle3">Civic</label>
                  <br />
                </div>
                <a className="text-xs text-rb-darkgreen">+ View More</a>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-base">Transmission</h3>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Automatic"
                  />
                  <label for="vehicle1">Automatic</label>
                  <br />
                </div>
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="Manual"
                  />
                  <label for="vehicle2">Manual</label>
                  <br />
                </div>
                <a className="text-xs text-rb-darkgreen">+ View More</a>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="dd-sort">
          <button className="dd-btn-sort md:hidden flex flex-row gap-2 items-center text-sm">
            <Image src="/assets/sort.svg" width={22} height={14} alt="sort" />
            Sort
          </button>
          <div className="dd-content-sort w-64 px-4 pb-4 gap-3">
            <div className="flex flex-row py-2 md:py-0 gap-2">
              <label for="sort" className="font-medium text-base">
                Sort by
              </label>
              <select id="sort" className="text-sm ">
                <option value="Price1">Price: Low to High</option>
                <option value="Price-1">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-row w-full lg:w-max gap-4 p-5 justify-between items-center">
          <div className="hidden md:flex flex-row w-32 items-center">
            <p className="md:block font-medium">4 Cars Found</p>
          </div>
          <div className="flex flex-row w-full justify-center">
            <div className="flex flex-row btn-secondary-sm lg:btn-secondary px-5 py-3 gap-3 items-center">
              <p>Fri, 20 Oct</p>
              <div>
                <p className="flex flex-row box-info text-rb-green text-sm px-2 py1">
                  1 day
                </p>
              </div>
              <p>Sat, 21 Oct</p>
              <button className="btn-primary-sm">
                <Image
                  src="/assets/magnifier.svg"
                  width={18}
                  height={18}
                  alt="magnifier"
                />
              </button>
            </div>
          </div>
        </div>
        <hr className="w-0 md:w-full" />
        <div className="flex flex-col gap-6 md:gap-0 w-full items-center max-w-[36rem]">
          <div className="flex flex-col rounded border-2 md:border-0 border-gray-300 border-opacity-20 md:border-opacity-0 md:flex-row w-64 md:w-full gap-6 md:gap-0 py-4 px-5 justify-between items-center md:items-start shadow-xl md:shadow-none">
            <Image
              src="/assets/2023-EQE350-SEDAN-AVP-DR.png"
              width={144}
              height={88}
              alt="car"
            />
            <div className="flex flex-col w-52 ml-8 gap-2 px-2">
              <h4 className="text-xl font-medium">Toyota Agya</h4>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-2">
                  <Image
                    src="/assets/profile.svg"
                    width={18}
                    height={18}
                    alt="seats"
                  />
                  <p>4 seats</p>
                </div>
                <div className="flex flex-row gap-2">
                  <Image
                    src="/assets/gears.svg"
                    width={18}
                    height={18}
                    alt="transmission"
                  />
                  <p>Manual</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-36 items-end gap-2">
              <div className="flex flex-col w-36 items-end">
                <p className="text-xs">Price per day</p>
                <p className="text-xl font-bold">Rp. 200000</p>
              </div>
              <button className="btn-primary">Order</button>
            </div>
          </div>
          <div className="flex flex-col rounded border-2 md:border-0 border-gray-300 border-opacity-20 md:border-opacity-0 md:flex-row w-64 md:w-full gap-6 md:gap-0 py-4 px-5 justify-between items-center md:items-start shadow-xl md:shadow-none">
            <Image
              src="/assets/2023-EQE350-SEDAN-AVP-DR.png"
              width={144}
              height={88}
              alt="car"
            />
            <div className="flex flex-col w-52 ml-8 gap-2 px-2">
              <h4 className="text-xl font-medium">Toyota Agya</h4>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-2">
                  <Image
                    src="/assets/profile.svg"
                    width={18}
                    height={18}
                    alt="seats"
                  />
                  <p>4 seats</p>
                </div>
                <div className="flex flex-row gap-2">
                  <Image
                    src="/assets/gears.svg"
                    width={18}
                    height={18}
                    alt="transmission"
                  />
                  <p>Manual</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-36 items-end gap-2">
              <div className="flex flex-col w-36 items-end">
                <p className="text-xs">Price per day</p>
                <p className="text-xl font-bold">Rp. 200000</p>
              </div>
              <button className="btn-primary">Order</button>
            </div>
          </div>
          <div className="flex flex-col rounded border-2 md:border-0 border-gray-300 border-opacity-20 md:border-opacity-0 md:flex-row w-64 md:w-full gap-6 md:gap-0 py-4 px-5 justify-between items-center md:items-start shadow-xl md:shadow-none">
            <Image
              src="/assets/2023-EQE350-SEDAN-AVP-DR.png"
              width={144}
              height={88}
              alt="car"
            />
            <div className="flex flex-col w-52 ml-8 gap-2 px-2">
              <h4 className="text-xl font-medium">Toyota Agya</h4>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-2">
                  <Image
                    src="/assets/profile.svg"
                    width={18}
                    height={18}
                    alt="seats"
                  />
                  <p>4 seats</p>
                </div>
                <div className="flex flex-row gap-2">
                  <Image
                    src="/assets/gears.svg"
                    width={18}
                    height={18}
                    alt="transmission"
                  />
                  <p>Manual</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-36 items-end gap-2">
              <div className="flex flex-col w-36 items-end">
                <p className="text-xs">Price per day</p>
                <p className="text-xl font-bold">Rp. 200000</p>
              </div>
              <button className="btn-primary">Order</button>
            </div>
          </div>
          <div className="flex flex-col rounded border-2 md:border-0 border-gray-300 border-opacity-20 md:border-opacity-0 md:flex-row w-64 md:w-full gap-6 md:gap-0 py-4 px-5 justify-between items-center md:items-start shadow-xl md:shadow-none">
            <Image
              src="/assets/2023-EQE350-SEDAN-AVP-DR.png"
              width={144}
              height={88}
              alt="car"
            />
            <div className="flex flex-col w-52 gap-2 px-2 ml-8">
              <h4 className="text-xl font-medium">Toyota Agya</h4>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-2">
                  <Image
                    src="/assets/profile.svg"
                    width={18}
                    height={18}
                    alt="seats"
                  />
                  <p>4 seats</p>
                </div>
                <div className="flex flex-row gap-2">
                  <Image
                    src="/assets/gears.svg"
                    width={18}
                    height={18}
                    alt="transmission"
                  />
                  <p>Manual</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-36 items-end gap-2">
              <div className="flex flex-col w-36 items-end">
                <p className="text-xs">Price per day</p>
                <p className="text-xl font-bold">Rp. 200000</p>
              </div>
              <button className="btn-primary">Order</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
