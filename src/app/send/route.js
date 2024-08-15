import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.re_Py2rk9M6_AG13pNxetM8etHP6qfuy36Fc);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Lefa <lefataleni@gmail.com>",
      to: ["lefataleni@gmail.com"],
      subject: "Hello world",
      react: (
        <>
          {" "}
          <p>Email body</p>{" "}
        </>
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
