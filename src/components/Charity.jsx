export default function Charity() {
  return (
    <section className="w-full bg-[#f7f7f7] py-20">
      {/* SECTION TITLE */}
      <h2 className="text-center text-4xl font-serif text-blue-900 mb-14">
        Our Charitable Focus Areas
      </h2>

      {/* MAIN CONTAINER */}
      <div>
        <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-11">
            {/* EDUCATION */}
            <FocusColumn title="Education">
              <Logo src="/images/Lo1.jpg" />
              <Logo src="/images/lo2.jpg" />
              <Logo src="/images/lo3.jpg" />
              <Logo src="/images/lo4.jpg" />
            </FocusColumn>

            {/* SOCIAL JUSTICE */}
            <Divider />
            <FocusColumn title="Social Justice & Equity">
              <Logo src="/images/lo6.jpg" />
              <Logo src="/images/lo5.jpg" />
              <Logo src="/images/lo8.jpg" />
              <Logo src="/images/lo7.jpg" />
            </FocusColumn>

            {/* UNDERSERVED YOUTH */}
            <Divider />
            <FocusColumn title="Underserved Youth">
              <Logo src="/images/lo10.jpg" />
              <Logo src="/images/lo11.jpg" />
              <Logo src="/images/lo9.jpg" />
              <Logo src="/images/lo12.jpg" />
            </FocusColumn>

            {/* HEALTH */}
            <Divider />
            <FocusColumn title="Health">
              <Logo src="/images/lo16.jpg" />
              <Logo src="/images/lo14.jpg" />
              <Logo src="/images/lo13.jpg" />
              <Logo src="/images/lo15.jpg" />
            </FocusColumn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* SUB COMPONENTS  */

function FocusColumn({ title, children }) {
  return (
    <div className="col-span-2 flex flex-col items-center px-2 py-12">
      <h3 className="text-xl font-serif text-blue-900 mb-10 text-center">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-x-10 gap-y-10 place-items-center w-full">
        {children}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="hidden md:flex col-span-1 justify-center">
      <div className="w-[2px] bg-[#02066f] my-12" />
    </div>
  );
}

function Logo({ src }) {
  return (
    <img
      src={src}
      alt=""
      className="h-12 w-full max-w-[140px] object-contain"
    />
  );
}
