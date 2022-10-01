import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

export const hello = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  console.log('ok');
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello',
      input: event,
    }),
  };
  return response;
};
