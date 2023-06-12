import clientPromise from "@/lib/mongodb";

const Movieslist = async (req: Request, res: Response) => {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metaCritic: -1 })
      .limit(10)
      .toArray();
    res.json();
    console.log(movies);
  } catch (error) {
    console.error(error);
  }
};

export default Movieslist;
