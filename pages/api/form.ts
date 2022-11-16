export default function handler(req: any, res: any) {
  // Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)

  // Guard clause checks
  // Returns early if input not found
  if (!body.origin || !body.destination || !body.departureDate) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Origin, destination, or departure date not found' })
  }

  // Sends a HTTP success code
  res.status(200).json({ data: `${body.origin}, ${body.destination}, ${body.departureDate}` })
}