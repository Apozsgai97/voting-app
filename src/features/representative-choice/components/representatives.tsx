import { representativeFeature } from "../instance";
import { Representative } from "./representative";

export async function Representatives() {
  const representatives =
    await representativeFeature.service.getAllRepresentatives();

  const publicUserRepId =
    await representativeFeature.service.getPublicUserRepId();

  return (
    <section className="flex flex-col justify-center mt-6 w-full lg:w-3/6">
      <div className="lg:overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            </tr>
          </thead>
          <Representative
            representatives={representatives}
            publicUserRepId={publicUserRepId}
          />
        </table>
      </div>
    </section>
  );
}
