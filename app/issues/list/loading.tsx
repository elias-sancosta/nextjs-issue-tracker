import { Skeleton } from '@/app/components';
import { Table, TableBody, TableHeader, TableRow } from '@radix-ui/themes';
import IssueActions from './IssueActions';

const LoadingIssuesPage = () => {
  const issues = [1, 2, 3, 4, 5];

  return (
    <div>
      <IssueActions />
      <Table.Root variant="surface">
        <TableHeader>
          <TableRow>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden sm:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden sm:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((issue) => (
            <Table.Row key={issue}>
              <Table.Cell>
                <Skeleton />
                <div className="block sm:hidden">
                  <Skeleton />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden sm:table-cell">
                <Skeleton />
              </Table.Cell>
              <Table.Cell className="hidden sm:table-cell">
                <Skeleton />
              </Table.Cell>
            </Table.Row>
          ))}
        </TableBody>
      </Table.Root>
    </div>
  );
};
export default LoadingIssuesPage;
